import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <div className="col-4">
            <ul>
                    <li>
                        <Link to="/manageProduct">
                            Manage Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/addProduct">
                            Add Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/editProduct">
                            Edit Product
                        </Link>
                    </li>
            </ul>
        </div>
    );
};

export default AdminMenu;