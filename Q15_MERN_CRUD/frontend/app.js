const { useState, useEffect } = React;

const API_URL = 'http://localhost:5000/api/users';

function App() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        city: ''
    });
    const [editingId, setEditingId] = useState(null);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            if (data.success) {
                setUsers(data.data);
            }
            setLoading(false);
        } catch (error) {
            showMessage('Error fetching users. Make sure backend is running.', 'error');
            setLoading(false);
        }
    };

    const showMessage = (text, type) => {
        setMessage({ text, type });
        setTimeout(() => setMessage(null), 3000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const url = editingId ? `${API_URL}/${editingId}` : API_URL;
            const method = editingId ? 'PUT' : 'POST';
            
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (data.success) {
                showMessage(data.message, 'success');
                setFormData({ name: '', email: '', age: '', city: '' });
                setEditingId(null);
                fetchUsers();
            } else {
                showMessage(data.message, 'error');
            }
        } catch (error) {
            showMessage('Error submitting form', 'error');
        }
    };

    const handleEdit = (user) => {
        setFormData({
            name: user.name,
            email: user.email,
            age: user.age,
            city: user.city || ''
        });
        setEditingId(user._id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this user?')) {
            return;
        }
        
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            
            const data = await response.json();
            
            if (data.success) {
                showMessage(data.message, 'success');
                fetchUsers();
            } else {
                showMessage(data.message, 'error');
            }
        } catch (error) {
            showMessage('Error deleting user', 'error');
        }
    };

    const handleCancel = () => {
        setFormData({ name: '', email: '', age: '', city: '' });
        setEditingId(null);
    };

    return (
        <div className="app">
            <h1>🚀 MERN CRUD Application</h1>
            
            {message && (
                <div className={`message ${message.type}`}>
                    {message.text}
                </div>
            )}
            
            <div className="form-container">
                <h2>{editingId ? 'Edit User' : 'Add New User'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="Enter age"
                                required
                                min="1"
                            />
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Enter city"
                            />
                        </div>
                    </div>
                    <div className="button-group">
                        <button type="submit" className="btn-primary">
                            {editingId ? 'Update User' : 'Add User'}
                        </button>
                        {editingId && (
                            <button type="button" className="btn-secondary" onClick={handleCancel}>
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>
            
            <div className="users-container">
                <h2>Users List ({users.length})</h2>
                {loading ? (
                    <div className="loading">Loading users...</div>
                ) : users.length > 0 ? (
                    <div className="users-grid">
                        {users.map((user) => (
                            <div key={user._id} className="user-card">
                                <h3>{user.name}</h3>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Age:</strong> {user.age}</p>
                                {user.city && <p><strong>City:</strong> {user.city}</p>}
                                <p><small>Added: {new Date(user.createdAt).toLocaleDateString()}</small></p>
                                <div className="user-actions">
                                    <button className="btn-edit" onClick={() => handleEdit(user)}>
                                        Edit
                                    </button>
                                    <button className="btn-danger" onClick={() => handleDelete(user._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-users">
                        No users found. Add your first user above!
                    </div>
                )}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
