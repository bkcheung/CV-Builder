function Footer(){
    const date = new Date().getFullYear();
    return(
        <footer className="sticky w-full bottom-0 p-2 text-center text-gray-500"> 
            Copyright © {date}
            <a id="github" href="https://github.com/bkcheung"> bkcheung</a>
        </footer>
    )
}
export default Footer