const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-finance-navy to-finance-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Mission
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
              "Stocks Labs AI empowers retail investors to decode complex financial reports using advanced AI models. 
              Get clarity, save time, and make informed decisions faster."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-finance-teal-light mb-3">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Cutting-edge AI technology for financial analysis</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-finance-teal-light mb-3">💡</div>
                <h3 className="text-xl font-semibold text-white mb-2">Simplicity</h3>
                <p className="text-gray-300">Complex reports made simple and actionable</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-finance-teal-light mb-3">🎯</div>
                <h3 className="text-xl font-semibold text-white mb-2">Accuracy</h3>
                <p className="text-gray-300">Precise insights with source citations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;