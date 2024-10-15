import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo_m41k80 from "assets/img/newm41k80.png";

function Footer() {
    return (
        <nav>
            <footer className="px-4 divide-y text-gray-800">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="space-y-8 xl:col-span-1">
				<img
                    src={logo_m41k80}
                    width={160}
                    height={160} 
                    className="" />
				</div>
				
			</a>
            <div className="space-y-6 xl:col-span-1 items-center justify-center mx-7">
				<div className="uppercase text-gray-900">Social media</div>
				<div className="flex justify-start space-x-3">
					<a rel="noopener noreferrer" href="#" title="Linkedin" className="flex items-center p-1">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
							<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-gray-900 font-semibold">Visit Us</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Marketing</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Analytics</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Commerce</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Insights</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-gray-900 font-semibold">Contact</h3>
				<ul className="space-y-1">
					<li>
						<Link to='/contact' className="text-sm inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Contact</Link>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase text-gray-900 font-semibold">Services</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">About</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Blog</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Jobs</a>
					</li>
                    <li>
						<a rel="noopener noreferrer" href="#">Press</a>
					</li>
                    <li>
						<a rel="noopener noreferrer" href="#">Partnery</a>
					</li>
				</ul>
			</div>
            <div className="space-y-3">
				<h3 className="uppercase text-gray-900 font-semibold">Company</h3>
				<ul className="space-y-1">
					<li>
					<Link to='/cases' className="text-sm inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Cases</Link>
					</li>
					<li>
					<Link to='/services' className="text-sm inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Services</Link>
					</li>
					<li>
					<Link to='/about' className="text-sm inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">About Us</Link>
					</li>
					<li>
					<Link to='/careers' className="text-sm inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Careers</Link>
					</li>
					<li>
					<Link to='/blog' className="text-sm inline-flex font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Blog</Link>
					</li>
					
				</ul>
			</div>
			
		</div>
	</div>
	<div className="py-6 text-sm text-center text-gray-600">© 2024 M41k80 Technology. All rights reserved.</div>
</footer>
        </nav>
    )
}

const mapStateToProps = state =>({
   
})

export default Footer;