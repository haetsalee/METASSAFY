import styled from './NotFound.module.css';

const NotFound = () => {
  return (
    <section>
      <h1>404 Error Page #2</h1>
      <p className={styled.zoom_area}>
        <b>CSS</b> animations to make a cool 404 page.{' '}
      </p>
      <section className={styled.error_container}>
        <span className={styled.four}>
          <span className={styled.screen_reader_text}>4</span>
        </span>
        <span className={styled.zero}>
          <span className={styled.screen_reader_text}>0</span>
        </span>
        <span className={styled.four}>
          <span className={styled.screen_reader_text}>4</span>
        </span>
      </section>
      <div className={styled.link_container}>
        <a
          target="_blank"
          href="https://www.silocreativo.com/en/creative-examples-404-error-css/"
          className={styled.more_link}
        >
          Visit the original article
        </a>
      </div>
    </section>
  );
};

export default NotFound;
