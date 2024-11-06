import { Link } from "react-router-dom"


export default function Home() {
  return (
    <div className="flex gap-8">
        <Link to="/component1" className="">Component 1</Link>
        <Link to="/component2" className="">Component 2</Link>
        <Link to="/component3" className="">Component 3</Link>
        <Link to="/component4" className="">Component 4</Link>
        <Link to="/component5" className="">Component 5</Link>
    </div>
  )
}
