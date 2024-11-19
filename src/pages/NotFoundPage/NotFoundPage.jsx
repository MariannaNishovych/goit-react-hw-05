import css from './NotFoundPage.module.css'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className={css.notFoundPage}>
        <p>Sorry, page is not found...</p>
        <Link to='/'>Back to Homepage</Link>
    </div>
  )
}

export default NotFoundPage;