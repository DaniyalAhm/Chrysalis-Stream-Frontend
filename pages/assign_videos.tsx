import Video_cards from '/src/app/components/video_cards.tsx' 
import styles from '../styles/profile.module.css'; // Importing the CSS module

export default function videos(){


return (

    <div>
        <h1>Your Videos</h1>

    <div className={styles.cards}>

<Video_cards></Video_cards>
<Video_cards></Video_cards>
<Video_cards></Video_cards>
<Video_cards></Video_cards>
<Video_cards></Video_cards>
<Video_cards></Video_cards>
<Video_cards></Video_cards>
<Video_cards></Video_cards>
<Video_cards></Video_cards>
<Video_cards></Video_cards>
<Video_cards></Video_cards>
<Video_cards></Video_cards>
</div>
    </div>
)

}