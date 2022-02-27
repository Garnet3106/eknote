import Note from '../api/note';

import Editor from './Editor';
import Header from './Header';
import LeftMenu from './LeftMenu';

export default function App() {
    return (
        <>
        <Header />
        <div className='main'>
            <LeftMenu />
            <Editor />
        </div>
        </>
    );
}
