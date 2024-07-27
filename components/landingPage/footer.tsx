import { ReactNode } from "react";


export const Footer = () => {
  return (
    <div className="bg-[#171717] text-white">
      <footer className="footer container pt-28 pb-10">
        <aside>
          <FooterHeading>100 days of Flutter</FooterHeading>
          <FooterSubHeading>
            <p>
              A product of hacking with flutter
            </p>
          </FooterSubHeading>
          {/* <div className="flex flex-row justify-start items-start gap-6">
          <img src="img-url" alt="Image 1" />
          <img src="img-url" alt="Image 2" />
          <img src="img-url" alt="Image 3" />
          <img src="img-url" alt="Image 4" />
          <img src="img-url" alt="Image 5" />
          </div> */}
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Get Started</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Community</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Refund Policy</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <form>
          <h6 className="footer-title">Subscribe to Newsletter</h6>
          <fieldset className="form-control w-80">
            {/* <label className="label">
            <span className="label-text">Enter your email address</span>
            </label> */}
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item" />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer footer-center py-6 border-[#8f8f8f] border-t">
        <p>
          &copy; Copyright {new Date().getFullYear()} All Rights Reserved by stract
        </p>
      </footer>
    </div>
  );
};

type HeadingProps = {
  color?: "text-[#171717]" | "text-[#5f5f5f]" | "text-white";
  children: string | JSX.Element | ReactNode;
};


export const FooterHeading = ({ children }: HeadingProps) => {
  return (
    <span className="text-base font-bold">
      {children}
    </span>
  );
};

export const FooterSubHeading = ({ children }: HeadingProps) => {
  return (
    <span className=" text-sm font-normal">
      {children}
    </span>
  );
};
