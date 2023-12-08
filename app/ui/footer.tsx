const Footer = () => {
  return (
    <section className="w-full flex justify-center py-6">
      <div className="w-[90%]">
        <div className="flex md:justify-between justify-center">
          <div>
            <h2 className="font-fig font-bold">Open Enterprise</h2>
          </div>
          <div className="w-[40%] md:flex justify-between font-fig hidden ">
            <p>Documentation</p>
            <p>Github</p>
            <p>Twitter</p>
            <p className="text-[#71A894]">Contact us</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
