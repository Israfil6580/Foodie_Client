import logo from "/images/logo.svg";

const Footer = () => {
    return (
        <div className="bg-green-100">
            <footer className="footer max-w-6xl mx-auto p-10 text-black ">
                <aside>
                    <img className="h-12 w-auto rounded-full" src={logo} alt="" />
                    <p>Providing reliable Services since 2022</p>
                    <p>123 Main Street, City, Country</p> {/* Location added here */}
                </aside>
                <nav>
                    <h4 className="footer-title">Contact Us</h4>
                    <p className="link link-hover">contact@example.com</p>
                    <p className="link link-hover">+123-456-7890</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Media</h6>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 text-black">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Foddie. Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
