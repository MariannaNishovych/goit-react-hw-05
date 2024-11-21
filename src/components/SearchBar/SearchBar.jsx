import css from './SearchBar.module.css';

const SearchBar = ({onSubmit}) => {
  return (
    <div>
  <form className={css.form} onSubmit={onSubmit}>
    <input
    className={css.input}
    type='text'
    name='query'
    autoComplete='off'
    autoFocus
    placeholder='Search the movie..' 
    />
    <button className={css.btn} type='submit'>Search</button>
  </form>
    </div>
  )
}

export default SearchBar;