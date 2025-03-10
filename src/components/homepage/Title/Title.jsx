import styles from "./Title.module.scss";

const { homepageTitle } = styles;

const Title = () => {
    return (
        <h1 className={homepageTitle}>Léa's Playlist</h1>
    )
}

export default Title;