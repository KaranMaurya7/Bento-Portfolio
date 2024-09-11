import myImage from "../assests/my-image.jpeg"
import { Contact } from "./Contact"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { Projects } from "./Projects"

export function Header() {

  return(<>
		<div className="lg:w-2/3 w-full h-24 rounded-2xl flex flex-row justify-between p-4 items-center bg-fifth m-4 mx-auto">
			<p className="text-4xl font-mono font-semibold">Karan Maurya</p>
		</div>

		{/* bento grid*/}
		<div className="lg:w-2/3 lg:h-5/6 grid lg:grid-cols-3 gap-4 mx-auto lg:grid-rows-5 grid-cols-1 grid-rows-3 w-full  ">

			<div className="lg:col-span-2 lg:row-span-3 row-span-1 col-span-1 grid lg:grid-cols-3 gap-4">
				
				<div className="col-span-2 bg-fifth rounded-2xl ">
					<Experience/>
				</div>

				{/* About*/}
				<div className="lg:col-span-1 hidden lg:block bg-fifth rounded-2xl">
					<img src={myImage} alt="myImage" className="rounded-2xl object-cover h-full"/>
				</div>
			</div>
		   
			<div className="lg:col-span-1 lg:row-span-5 grid lg:grid-rows-6 gap-4 ">

				<div className="lg:row-span-5 bg-fifth rounded-2xl">
					<Projects/>
				</div>

				<div className="row-span-1 bg-fifth rounded-2xl hidden lg:flex justify-around items-center font-medium text-lg p-4">
					<a href="https://www.instagram.com/_bugs__bunny___/" target="_blank">Instagram </a>
					<a href="https://in.linkedin.com/in/karan-maurya-9b6b29259" target="_blank">LinkdeIn</a>
					<a href="https://github.com/KaranMaurya7" target="_blank">Github</a>
				</div>
			</div>

			
			<div className="lg:col-span-2 lg:row-span-2 grid lg:grid-cols-4 gap-4 ">

				<div className="lg:col-span-2 bg-fifth rounded-2xl">
					<Education/>
				</div>

				<div className="lg:col-span-2 h-full flex flex-col font-serif justify-between bg-fifth rounded-2xl">
					<Contact/>
				</div>
			</div>
			
		</div>
	</>)
}