import React, { useState, useEffect } from 'react';

const PortfolioWebsite: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState('powerplatform');
  const [activeFilter, setActiveFilter] = useState('all');
  const [popup, setPopup] = useState<{open: boolean; item?: any}>({open: false});
  const [modal, setModal] = useState<number | null>(null);
  const [testimonial, setTestimonial] = useState(0);
  const [focus, setFocus] = useState<{[k: string]: boolean}>({});

  const skills = {
    powerplatform: [{n: 'Power Apps', p: 95}, {n: 'Power Automate', p: 90}, {n: 'SharePoint', p: 85}, {n: 'Power BI', p: 80}],
    development: [{n: 'React', p: 85}, {n: 'TypeScript', p: 80}, {n: 'JavaScript', p: 90}, {n: 'HTML/CSS', p: 95}],
    database: [{n: 'SQL Server', p: 85}, {n: 'MySQL', p: 80}, {n: 'Azure SQL', p: 75}, {n: 'Dataverse', p: 90}]
  };

  const works = [
    {id: 1, cat: 'powerapp', img: 'https://i.postimg.cc/43Th5VXJ/work-1.png', title: 'Enterprise Portal'},
    {id: 2, cat: 'web', img: 'https://i.postimg.cc/sXLjnC5p/work-2.png', title: 'Workflow Automation'},
    {id: 3, cat: 'dashboard', img: 'https://i.postimg.cc/QNB1jXYZ/work-3.png', title: 'Analytics Dashboard'},
    {id: 4, cat: 'powerapp', img: 'https://i.postimg.cc/s2DGqyG8/work-4.png', title: 'Mobile App Solution'},
    {id: 5, cat: 'web', img: 'https://i.postimg.cc/TYVyPhrF/work-5.png', title: 'Data Management'},
    {id: 6, cat: 'dashboard', img: 'https://i.postimg.cc/wMdqKcbv/work-6.png', title: 'Business Intelligence'}
  ];

  const testimonials = [
    {desc: 'Navdeep delivered exceptional Power Platform solutions that transformed our business processes. His expertise in Power Apps and SharePoint integration exceeded our expectations.', date: 'March 30, 2025', name: 'Rajesh Kumar', role: 'IT Manager', img: 'https://i.postimg.cc/MTr9j4Yn/client1.jpg'},
    {desc: 'Outstanding work on our enterprise automation project. Navdeep\'s deep knowledge of Power Automate and Azure services made our digital transformation seamless.', date: 'January 18, 2025', name: 'Priya Sharma', role: 'Project Director', img: 'https://i.postimg.cc/wvV7f8rB/client2.jpg'},
    {desc: 'Working with Navdeep was a game-changer for our organization. His Power BI dashboards and data insights helped us make better business decisions.', date: 'November 29, 2024', name: 'Amit Patel', role: 'Business Analyst', img: 'https://i.postimg.cc/pdP9DL0S/client3.jpg'}
  ];

  const services = [
    {icon: 'web-grid', title: 'Power Apps<br>Development', items: ['Canvas Apps', 'Model-Driven Apps', 'Power Pages', 'Custom Connectors', 'SharePoint Integration']},
    {icon: 'arrow', title: 'Process<br>Automation', items: ['Power Automate Flows', 'Workflow Design', 'API Integration', 'Data Transformation', 'Business Logic']},
    {icon: 'edit', title: 'Data &<br>Analytics', items: ['Power BI Dashboards', 'SQL Optimization', 'Data Modeling', 'Azure Integration', 'Dataverse Solutions']}
  ];

  const filtered = activeFilter === 'all' ? works : works.filter(w => w.cat === activeFilter);

  useEffect(() => {
    const timer = setInterval(() => setTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Segoe+UI:wght@300;400;500;600;700&display=swap');
        .portfolio-root{--skin:linear-gradient(135deg, #742774 0%, #A254A0 100%);--skin-solid:#742774;--accent:#0078D4;--title:rgba(255,255,255,0.95);--text:rgba(255,255,255,0.8);--body:linear-gradient(135deg, #1e1e2e 0%, #2a2a3e 100%);--glass:rgba(116,39,116,0.1);--glass-border:rgba(162,84,160,0.2);--shadow:rgba(0,0,0,0.3);--font:'Segoe UI',sans-serif}
        .portfolio-root *{margin:0;padding:0;box-sizing:border-box}
        .portfolio-root{font-family:var(--font);color:var(--text);position:relative;padding:4rem 0}
        .portfolio-root::before{content:'';position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at 20% 50%, rgba(116,39,116,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(162,84,160,0.2) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(0,120,212,0.2) 0%, transparent 50%);pointer-events:none;z-index:-1}
        .portfolio-container{max-width:1200px;margin:0 auto;padding:0 1rem}.portfolio-grid{display:grid}.portfolio-flex{display:flex}
        .glass{background:var(--glass);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid var(--glass-border);box-shadow:0 8px 32px var(--shadow)}
        .glass-card{background:rgba(116,39,116,0.05);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);border:1px solid rgba(162,84,160,0.1);border-radius:20px;box-shadow:0 15px 35px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2);transition:all 0.4s cubic-bezier(0.23,1,0.320,1)}
        .glass-card:hover{transform:translateY(-10px) scale(1.02);box-shadow:0 25px 50px rgba(116,39,116,0.3), inset 0 1px 0 rgba(255,255,255,0.3)}
        .portfolio-btn{display:inline-flex;align-items:center;gap:.5rem;background:var(--skin);color:var(--title);padding:.75rem 1.4rem;border:none;border-radius:50px;cursor:pointer;transition:all 0.3s ease;position:relative;overflow:hidden;font-weight:500;text-decoration:none;font-family:var(--font)}
        .portfolio-btn::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);transition:left 0.5s}
        .portfolio-btn:hover::before{left:100%}
        .portfolio-btn:hover{transform:translateY(-3px);box-shadow:0 10px 25px rgba(116,39,116,0.4)}
        .portfolio-section{padding:6rem 0 2rem;position:relative}.portfolio-title{text-align:center;font-size:2.5rem;margin-bottom:3rem;color:var(--title);font-weight:600;text-shadow:0 4px 8px rgba(0,0,0,0.3);background:linear-gradient(135deg, #742774, #A254A0, #0078D4);background-size:200% 200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:gradientShift 3s ease-in-out infinite}
        @keyframes gradientShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        .skills-container{grid-template-columns:1fr 1fr;gap:4rem;align-items:start}
        .skills-header{display:flex;align-items:center;padding:1.5rem;border-radius:20px;cursor:pointer;margin-bottom:1.5rem;transition:all 0.3s ease;position:relative;overflow:hidden}
        .skills-header::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);transition:left 0.5s}
        .skills-header:hover::before{left:100%}
        .skills-header.active{background:var(--skin);transform:translateX(10px);box-shadow:0 10px 25px rgba(116,39,116,0.3)}
        .skills-icon{font-size:2.5rem;color:var(--skin-solid);margin-right:1.5rem;transition:all 0.3s ease}
        .skills-header.active .skills-icon{color:white;transform:rotate(360deg)}
        .skills-data{margin-bottom:2rem;padding:1rem;border-radius:15px;transition:all 0.3s ease}
        .skills-data:hover{background:rgba(116,39,116,0.05);transform:translateX(10px)}
        .skills-titles{display:flex;justify-content:space-between;margin-bottom:1rem;font-weight:600;color:var(--title)}
        .skills-bar{height:8px;background:rgba(255,255,255,0.1);border-radius:10px;overflow:hidden;position:relative}
        .skills-per{height:100%;background:var(--skin);transition:width 1s ease;border-radius:10px;position:relative;overflow:hidden}
        .skills-per::after{content:'';position:absolute;top:0;left:0;height:100%;width:30px;background:linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);animation:slide 2s infinite}
        @keyframes slide{0%{transform:translateX(-30px)}100%{transform:translateX(200px)}}
        .work-filters{display:flex;justify-content:center;gap:1rem;margin-bottom:3rem;flex-wrap:wrap}
        .work-item{padding:1rem 2rem;border:none;border-radius:25px;color:var(--text);cursor:pointer;transition:all 0.3s ease;font-weight:500;position:relative;overflow:hidden;background:rgba(116,39,116,0.05);font-family:var(--font)}
        .work-item.active,.work-item:hover{background:var(--skin);color:var(--title);transform:translateY(-5px);box-shadow:0 10px 25px rgba(116,39,116,0.3)}
        .work-container{grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2.5rem}
        .work-card{padding:2rem;border-radius:25px;transition:all 0.4s cubic-bezier(0.23,1,0.320,1);position:relative;overflow:hidden}
        .work-img{width:100%;border-radius:20px;margin-bottom:1.5rem;transition:transform 0.3s ease;box-shadow:0 10px 25px rgba(0,0,0,0.1)}
        .work-card:hover .work-img{transform:scale(1.05)}
        .work-card h3{color:var(--title);margin-bottom:1rem;font-size:1.2rem}
        .work-btn{color:var(--skin-solid);background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:.5rem;font-weight:600;transition:all 0.3s ease;padding:0.5rem 0;font-family:var(--font)}
        .work-btn:hover{color:var(--accent);transform:translateX(10px)}
        .popup{position:fixed;inset:0;background:rgba(0,0,0,0.7);backdrop-filter:blur(10px);display:${popup.open ? 'flex' : 'none'};align-items:center;justify-content:center;z-index:1000;padding:1rem;animation:fadeIn 0.3s ease}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        .popup-content{border-radius:25px;padding:2.5rem;max-width:700px;position:relative;animation:slideUp 0.3s ease}
        @keyframes slideUp{from{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}
        .popup-close{position:absolute;top:1rem;right:1rem;background:rgba(255,255,255,0.1);border:none;color:var(--title);font-size:1.5rem;cursor:pointer;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all 0.3s ease}
        .popup-close:hover{background:rgba(255,255,255,0.2);transform:rotate(90deg)}
        .popup-content h3{color:var(--title);margin-top:1rem;font-size:1.5rem}
        .popup-content p{margin-top:1rem;line-height:1.6}
        .services-container{grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2.5rem}
        .service-card{padding:3rem 2rem;border-radius:25px;text-align:center;transition:all 0.4s ease;position:relative;overflow:hidden}
        .service-icon{font-size:3rem;color:var(--skin-solid);margin-bottom:1.5rem;transition:all 0.3s ease}
        .service-card:hover .service-icon{transform:scale(1.2) rotate(10deg)}
        .service-card h3{color:var(--title);margin-bottom:1.5rem;font-size:1.3rem}
        .modal{position:fixed;inset:0;background:rgba(0,0,0,0.7);backdrop-filter:blur(10px);display:${modal !== null ? 'flex' : 'none'};align-items:center;justify-content:center;z-index:1000;padding:1rem;animation:fadeIn 0.3s ease}
        .modal-content{border-radius:25px;padding:3rem;max-width:600px;position:relative;animation:slideUp 0.3s ease}
        .modal-close{position:absolute;top:1rem;right:1rem;background:rgba(255,255,255,0.1);border:none;color:var(--title);font-size:1.5rem;cursor:pointer;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all 0.3s ease}
        .modal-close:hover{background:rgba(255,255,255,0.2);transform:rotate(90deg)}
        .modal-content h3{color:var(--title);margin-bottom:1rem;font-size:1.5rem}
        .modal-content p{margin-bottom:1.5rem;line-height:1.6}
        .modal-content ul{list-style:none;padding:0}
        .modal-content li{margin-bottom:.5rem;color:var(--text);padding-left:1.5rem;position:relative}
        .modal-content li::before{content:'✓';position:absolute;left:0;color:var(--accent)}
        .testimonial{border-radius:25px;padding:2.5rem;margin-bottom:2rem;position:relative;overflow:hidden}
        .testimonial p{font-size:1.1rem;line-height:1.8;margin-bottom:1.5rem;color:var(--text)}
        .testimonial-profile{display:flex;align-items:center;gap:1.5rem;margin-top:1.5rem}
        .testimonial-img{width:70px;height:70px;border-radius:50%;border:3px solid rgba(162,84,160,0.3);transition:transform 0.3s ease}
        .testimonial:hover .testimonial-img{transform:scale(1.1)}
        .testimonial-profile h4{color:var(--title);margin-bottom:0.25rem}
        .testimonial-profile span{color:var(--text);font-size:0.9rem}
        @media(max-width:768px){
          .skills-container{grid-template-columns:1fr;text-align:center;gap:3rem}
          .work-container{grid-template-columns:1fr}
          .portfolio-title{font-size:2rem}
          .work-filters{gap:0.5rem}
          .work-item{padding:0.8rem 1.5rem;font-size:0.9rem}
        }
      `}</style>

      <div className="portfolio-root">
        <section className="portfolio-section" id="portfolio-skills">
          <h2 className="portfolio-title">Technical Expertise</h2>
          <div className="skills-container portfolio-container portfolio-grid">
            <div>
              {[
                {id: 'powerplatform', icon: 'bolt', title: 'Power Platform Expert'},
                {id: 'development', icon: 'brackets-curly', title: 'Full Stack Developer'},
                {id: 'database', icon: 'database', title: 'Database Specialist'}
              ].map(skill => (
                <div key={skill.id} className={`skills-header glass-card ${activeSkill === skill.id ? 'active' : ''}`} onClick={() => setActiveSkill(skill.id)}>
                  <i className={`uil uil-${skill.icon} skills-icon`}></i>
                  <div>
                    <h3 style={{color: activeSkill === skill.id ? 'white' : 'var(--title)'}}>{skill.title}</h3>
                    <span style={{color: activeSkill === skill.id ? 'rgba(255,255,255,0.8)' : 'var(--text)'}}>3+ years experience</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="skills-content">
              {skills[activeSkill as keyof typeof skills]?.map((skill, i) => (
                <div key={i} className="skills-data">
                  <div className="skills-titles">
                    <h3>{skill.n}</h3>
                    <span>{skill.p}%</span>
                  </div>
                  <div className="skills-bar">
                    <div className="skills-per" style={{width: `${skill.p}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section" id="portfolio-work">
          <h2 className="portfolio-title">Featured Projects</h2>
          <div className="work-filters">
            {[
              {id: 'all', label: 'All Projects'},
              {id: 'powerapp', label: 'Power Apps'},
              {id: 'web', label: 'Web Solutions'},
              {id: 'dashboard', label: 'Dashboards'}
            ].map(f => (
              <button key={f.id} className={`work-item glass-card ${activeFilter === f.id ? 'active' : ''}`} onClick={() => setActiveFilter(f.id)}>
                {f.label}
              </button>
            ))}
          </div>
          <div className="work-container portfolio-container portfolio-grid">
            {filtered.map(work => (
              <div key={work.id} className="work-card glass-card">
                <img src={work.img} alt={work.title} className="work-img" />
                <h3>{work.title}</h3>
                <button className="work-btn" onClick={() => setPopup({open: true, item: work})}>
                  View Details <i className="uil uil-arrow-right"></i>
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="popup">
          <div className="popup-content glass-card">
            <button className="popup-close" onClick={() => setPopup({open: false})}>&times;</button>
            <img src={popup.item?.img} alt="" style={{width: '100%', borderRadius: '1rem'}} />
            <h3>{popup.item?.title}</h3>
            <p>Comprehensive solution built with modern Power Platform technologies, delivering enterprise-grade functionality with seamless user experience and robust data management.</p>
          </div>
        </div>

        <section className="portfolio-section" id="portfolio-services">
          <h2 className="portfolio-title">Professional Services</h2>
          <div className="services-container portfolio-container portfolio-grid">
            {services.map((service, i) => (
              <div key={i} className="service-card glass-card">
                <i className={`uil uil-${service.icon} service-icon`}></i>
                <h3 dangerouslySetInnerHTML={{__html: service.title}}></h3>
                <button className="portfolio-btn" onClick={() => setModal(i)}>Learn More</button>
              </div>
            ))}
          </div>
        </section>

        <div className="modal">
          <div className="modal-content glass-card">
            <button className="modal-close" onClick={() => setModal(null)}>&times;</button>
            <h3>{services[modal || 0]?.title.replace('<br>', ' ')}</h3>
            <p>Delivering high-quality enterprise solutions with expertise and dedication</p>
            <ul>
              {services[modal || 0]?.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <section className="portfolio-section">
          <h2 className="portfolio-title">Client Testimonials</h2>
          <div className="portfolio-container">
            <div className="testimonial glass-card">
              <p>"{testimonials[testimonial].desc}"</p>
              <div className="testimonial-profile">
                <img src={testimonials[testimonial].img} alt={testimonials[testimonial].name} className="testimonial-img" />
                <div>
                  <h4>{testimonials[testimonial].name}</h4>
                  <span>{testimonials[testimonial].role}</span>
                  <p style={{fontSize: '0.85rem', marginTop: '0.25rem', opacity: 0.7}}>{testimonials[testimonial].date}</p>
                </div>
              </div>
            </div>
            <div style={{textAlign: 'center'}}>
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setTestimonial(i)} 
                  style={{
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    border: 'none', 
                    margin: '0 4px', 
                    background: i === testimonial ? '#742774' : 'rgba(255,255,255,0.3)', 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                ></button>
              ))}
            </div>
          </div>
        </section>
      </div>

      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
    </>
  );
};

export default PortfolioWebsite;
