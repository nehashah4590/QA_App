import Video from 'next-video';
import bgvideo from '../public/images/bgvideo.mp4';

export default function Home() {
  return (
    <>
      <main>
      <Video src={bgvideo} />;
        <div>
          <h1>Welcome</h1>
          <p>To my site</p>
        </div>
      </main>

    </>
  )
}
