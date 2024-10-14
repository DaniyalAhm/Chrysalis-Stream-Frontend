import Video_cards from "@/app/components/video_cards";
import styles from '/styles/profile.module.css'; // Importing the CSS module

export default function Student_portal(){
    return(
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