import  { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Breadcrumb() {
    const { order_id } = useParams();
    const [pages, setPages] = useState('');

    useEffect(() => {
        if (order_id) {
            setPages(order_id);
        } else {
            setPages('');
        }
    }, [order_id]);

    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
                <li>
                    <div>
                        <Link
                            to="/orders"
                            className="text-xs font-medium text-blue-400 hover:text-gray-700"
                        >
                            All Orders
                        </Link>
                    </div>
                </li>
                {pages && (
                    <li>
                        <div className="flex items-center">
                            <svg
                                className="h-5 w-5 flex-shrink-0 text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                            <Link
                                to={`/orders/${pages}`}
                                className="text-xs font-medium text-blue-400 hover:text-gray-700"
                            >
                                {pages}
                            </Link>
                        </div>
                    </li>
                )}
            </ol>
        </nav>
    );
}
