import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { db } from '../firebase.js';
import { doc, deleteDoc } from "firebase/firestore";
import './todo.css';

const Todo = ({ arr }) => {
    return (
        <List className="todo__list">
            <ListItem sx={{ display: 'list-item' }}>
                <div className="list">
                    <ListItemText primary={arr.item.todo} className='margin' />
                    <DeleteIcon fontSize="large" style={{ opacity: 0.7 }} onClick={() => { deleteDoc(doc(db, 'todos', arr.id)) }} />
                </div>
            </ListItem>
        </List >
    )
};

export default Todo;

// db.collection('todos').doc(arr.id).delete()