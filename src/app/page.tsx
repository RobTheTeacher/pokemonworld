import HomeGridArticle from "@/components/HomeGridArticle";
import { HomeGridArticleType} from '@/utils/types'

const articles:HomeGridArticleType[] = [
  {title: "Sunny Days", image: "/beach.jpg", style:"primary"},
  {title: "Cute Bugs", image: "/bug.jpg", style:"secondary"},
  {title: "Waltzing Pokemon", image: "/dance.jpg", style:"tertiary"},
  {title: "Fire + Fighting", image: "/hotbunny.jpeg", style:"featured"},
  {title: "New Models released", image: "/models.jpg", style:"primary"},
  {title: "Small but Tough", image: "/mouse.jpg", style:"secondary"},
]

export default function Home() {
  return (
    <div className="home-grid">
      {articles.map((item:HomeGridArticleType, index:number) => 
         <HomeGridArticle key={index} {...item} /> )
      }
    </div>
  );
}
