// import React from 'react';
// import { motion } from 'framer-motion';
// import { CheckCircle, ArrowRight, ClipboardList, PenTool, ShieldCheck, Truck, Users, Activity, Layers, Zap, Search, FileCheck, HardHat } from 'lucide-react';
// import { Link } from 'react-router-dom';



// const BenefitCard = ({ icon, title, desc }) => (
//     <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
//         <div className="w-12 h-12 bg-[#001528]/5 rounded-lg flex items-center justify-center text-[#001528] mb-4">
//             {icon}
//         </div>
//         <h4 className="text-lg font-bold text-[#001528] mb-3">{title}</h4>
//         <p className="text-gray-600 text-sm">{desc}</p>
//     </div>
// );

// const BusinessPage = ({ title, subTitle, description, image, features, process, benefits }) => {
//     return (
//         <div className="pt-20 font-sans text-gray-900 bg-white">
//             {/* Hero Section */}
//             <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
//                 <div className="absolute inset-0">
//                     <img
//                         src={image}
//                         alt={title}
//                         className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#001528]/95 to-[#001528]/70"></div>
//                 </div>

//                 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <h2 className="text-[#E6A93E] text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-4">
//                             Expertise & Services
//                         </h2>
//                         <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
//                             {title}
//                         </h1>
//                         <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-light">
//                             {subTitle}
//                         </p>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Main Content Section */}
//             <section className="py-24">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
//                         {/* Left Column: Description & Features */}
//                         <div className="lg:w-3/5">
//                             <h3 className="text-3xl font-bold text-[#001528] mb-6">Service Overview</h3>
//                             <div className="text-gray-600 text-lg leading-relaxed mb-10 space-y-4">
//                                 {description.map((para, i) => (
//                                     <p key={i}>{para}</p>
//                                 ))}
//                             </div>

//                             <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100 shadow-sm">
//                                 <h4 className="text-xl font-bold text-[#001528] mb-6">Key Capabilities</h4>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     {features && features.map((feature, i) => (
//                                         <div key={i} className="flex items-start group">
//                                             <CheckCircle className="w-5 h-5 text-[#E6A93E] mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
//                                             <span className="text-gray-700 font-medium">{feature}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Column: Process/Approach */}
//                         <div className="lg:w-2/5 w-full">
//                             <div className="bg-[#001528] text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
//                                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6A93E] opacity-10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
//                                 <h3 className="text-2xl font-bold mb-8 relative z-10">Our Approach</h3>
//                                 <div className="space-y-8 relative z-10">
//                                     {process && process.map((step, i) => (
//                                         <div key={i} className="flex gap-4">
//                                             <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E6A93E] text-[#001528] flex items-center justify-center font-bold text-sm">
//                                                 {i + 1}
//                                             </div>
//                                             <div>
//                                                 <h4 className="font-bold text-lg mb-1">{step.title}</h4>
//                                                 <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Benefits Section */}
//                     {benefits && (
//                         <div className="mb-24">
//                             <div className="text-center mb-12">
//                                 <h3 className="text-3xl font-bold text-[#001528] mb-4">Why Choose Us</h3>
//                                 <div className="w-20 h-1.5 bg-[#E6A93E] rounded-full mx-auto mb-8"></div>
//                                 <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-4">
//                                     <p>
//                                         Clients trust RS Solar CAD Group for our consistency, technical depth, and execution reliability. Our engineers are not only design experts but also field-trained professionals who understand real-world installation challenges.
//                                     </p>
//                                     <p>
//                                         By offering flexible engagement models, quick turnaround times, and performance-driven SLAs, we allow our partners to focus on growth while we manage design complexity with confidence and accountability.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                                 {benefits.map((benefit, i) => (
//                                     <BenefitCard key={i} {...benefit} />
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {/* CTA */}
//                     <div className="bg-[#E6A93E] rounded-3xl p-12 text-center relative overflow-hidden">
//                         <div className="absolute inset-0 bg-[#001528] opacity-5 pattern-grid-lg"></div>
//                         <h2 className="text-3xl md:text-4xl font-bold text-[#001528] mb-6 relative z-10">Ready to Optimize Your Project?</h2>
//                         <p className="text-[#001528]/80 text-lg mb-8 max-w-2xl mx-auto relative z-10">
//                             Partner with RS Solar CAD Group for world-class engineering and design support tailored to your needs.
//                         </p>
//                         <Link to="/contact-us" className="relative z-10 inline-flex items-center justify-center bg-[#001528] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-[#001528] transition-all duration-300 shadow-xl">
//                             Get A Free Quote
//                             <ArrowRight className="ml-2 w-5 h-5" />
//                         </Link>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// // 1. Solar Design & Engineering
// export const SolarDesign = () => (
//     <BusinessPage
//         title="Solar Design & Engineering"
//         subTitle="Precision-engineered solar plan sets for faster approvals and seamless installation."
//         image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
//         description={[
//             "RS Solar CAD Group provides comprehensive solar design and engineering solutions that support installers, contractors, and EPCs at every stage of project development. From early-stage planning to final approvals and commissioning, we ensure technically sound, regulation-ready solar designs backed by years of industry expertise.",
//             "Our engineering teams create highly accurate solar PV system layouts using advanced CAD platforms, with strict adherence to local authority guidelines, AHJ standards, NEC, fire safety codes, and utility requirements. Each design is developed with a strong focus on system performance, ease of installation, and long-term operational reliability.",
//             "Our Services Include:",
//             "• Solar proposal layouts with energy yield and financial assessments",
//             "• Permit-ready residential plan sets for installation and interconnection approvals",
//             "• Structural and electrical reviews performed by licensed Professional Engineers",
//             "• As-built documentation for Permission to Operate (PTO) approvals",
//             "• Optimized engineering drawings designed to enhance energy production",
//             "By delivering seamless technical support from concept through post-installation documentation, RS Solar CAD Group acts as a reliable engineering partner—helping clients achieve faster approvals, fewer revisions, and successful solar project execution."
//         ]}
//         features={[
//             "Proposal Drawings & Sales Layouts",
//             "Permit-Ready Plan Sets (PV Sets)",
//             "PE Stamping (All 50 States)",
//             "As-Built Drawings",
//             "Structural & Electrical Engineering",
//             "Battery Storage Integration"
//         ]}
//         process={[
//             {
//                 title: "Proposal Design",
//                 desc: "Our team creates an optimized PV layout ensuring maximum production and aesthetics."
//             },
//             {
//                 title: "Permit Design",
//                 desc: "Solar permit design involves creating detailed blueprints for PV system installations, ensuring safety, code compliance, and efficient performance."
//             },
//             {
//                 title: "E-Stamping",
//                 desc: "Professional electrical and structural engineering stamps (PE/SE) applied to plan sets for AHJ approval."
//             },
//             { title: "Engineering Review", desc: "Designs undergo rigorous structural and electrical checks for code compliance." },
//             { title: "Final Delivery", desc: "You receive a complete permit package ready for submission to the city/utility." }
//         ]}
//         benefits={[
//             { icon: <FileCheck />, title: "98% First-Time Approval", desc: "Our meticulous attention to code ensures plans sail through permitting." },
//             { icon: <Activity />, title: "24-Hour Turnaround", desc: "Fast-track your projects with our rapid design delivery capabilities." },
//             { icon: <ShieldCheck />, title: "Code Compliant", desc: "Up-to-date with NEC, IBC, and local fire codes for every jurisdiction." }
//         ]}
//     />
// );

// // 2. EV Charging Station Plans
// export const EVCharging = () => (
//     <BusinessPage
//         title="EV Charging Station Plans"
//         subTitle="Comprehensive design and permitting for residential & commercial EV infrastructure."
//         image="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"
//         description={[
//             "The transition to electric mobility is accelerating, and robust infrastructure is the backbone of this shift. We provide end-to-end design and engineering services for Electric Vehicle Service Equipment (EVSE) installations. From single-family home chargers to complex commercial fleet depots, we handle the technical heavy lifting.",
//             "Our services include site feasibility studies, ADA compliance planning, detailed electrical load calculations, and single-line diagrams. We coordinate with utilities to ensure your grid connection is sized correctly for your charging needs."
//         ]}
//         features={[
//             "Site Feasibility & Layouts",
//             "Electrical Load Calculations",
//             "Single Line Diagrams (SLD)",
//             "ADA Compliance Design",
//             "Permit Application Management",
//             "Utility Coordination"
//         ]}
//         process={[
//             { title: "Site Assessment", desc: "Evaluate electrical capacity and physical location for optimal charger placement." },
//             { title: "Load Calculation", desc: "Determine existing load and necessary upgrades to support Level 2 or DC Fast Chargers." },
//             { title: "Plan Generation", desc: "Draft detailed site plans and electrical diagrams adhering to NEC Article 625." },
//             { title: "Permit Support", desc: "Provide all documentation required for AHJ and utility approval." }
//         ]}
//         benefits={[
//             { icon: <Zap />, title: "Scalable Solutions", desc: "Designs that allow for future expansion as EV adoption grows." },
//             { icon: <CheckCircle />, title: "Regulatory Expertise", desc: "Deep understanding of ADA and local zoning laws for EV stations." },
//             { icon: <Truck />, title: "Fleet Ready", desc: "Specialized experience in high-capacity charging for commercial fleets." }
//         ]}
//     />
// );

// // 3. CAD Design & Drafting
// export const CADDesign = () => (
//     <BusinessPage
//         title="CAD Design & Drafting"
//         subTitle="Seamless extension of your engineering team with high-precision drafting."
//         image="https://images.unsplash.com/photo-1581094794329-cd1096a7a750?auto=format&fit=crop&q=80&w=800"
//         description={[
//             "Accuracy is the currency of engineering. Our CAD Design & Drafting services provide you with precise, high-quality 2D and 3D drawings that adhere to global standards. We act as an on-demand drafting wing for architects, engineers, and construction firms, eliminating the bottleneck of in-house drafting.",
//             "We utilize the latest software (AutoCAD, Revit, SketchUp) to convert sketches, PDFs, and point cloud data into editable, layered CAD files. Whether it's architectural floor plans, structural details, or electrical schematics, we deliver pixel-perfect results."
//         ]}
//         features={[
//             "2D Drafting & 3D Modeling",
//             "Paper to CAD Conversion",
//             "Architectural & Structural Drafting",
//             "MEP (Mechanical, Electrical, Plumbing)",
//             "Redline Markups & Revisions",
//             "BIM Modeling (LOD 100-500)"
//         ]}
//         process={[
//             { title: "Requirement Analysis", desc: "Understand CAD standards, layers, and blocks specific to your firm." },
//             { title: "Drafting Execution", desc: "Skilled drafters convert your inputs into precise CAD drawings." },
//             { title: "Quality Control", desc: "A rigorous two-step check ensures dimensions and layers are accurate." },
//             { title: "Final Dispatch", desc: "Delivery of DWG, PDF, and RVT files ready for immediate use." }
//         ]}
//         benefits={[
//             { icon: <PenTool />, title: "Precision Guarantee", desc: "99.9% accuracy in dimensions and scaling." },
//             { icon: <Layers />, title: "Standardized Output", desc: "We adhere strictly to your company's layering and text styles." },
//             { icon: <Activity />, title: "Rapid Turnaround", desc: "Overnight delivery options available for urgent redlines." }
//         ]}
//     />
// );

// // 4. Workforce & Technical Staffing
// export const WorkforceStaffing = () => (
//     <BusinessPage
//         title="Workforce & Technical Staffing"
//         subTitle="On-demand access to specialized solar and engineering talent."
//         image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
//         description={[
//             "Scaling a technical team is challenging. RS Solar CAD Group simplifies this with our specialized Staffing Solutions. We provide pre-vetted, industry-trained talent specifically for the solar and AEC (Architecture, Engineering, Construction) sectors. Forget the hassle of recruiting, training, and retaining niche technical staff.",
//             "Whether you need a dedicated remote CAD designer, a solar design engineer, or a back-office support team for proposal generation, we can deploy the right talent within days. Our 'staff leasing' model gives you full control over the employee while we handle HR, payroll, and infrastructure."
//         ]}
//         features={[
//             "Dedicated Solar Design Engineers",
//             "Remote CAD Drafters",
//             "Proposal & Sales Support Teams",
//             "Project Coordinators",
//             "Short-term & Long-term Placements",
//             "Fully Managed HR & Payroll"
//         ]}
//         process={[
//             { title: "Needs Assessment", desc: "We define the skill set, experience level, and software proficiency required." },
//             { title: "Candidate Screening", desc: "We source and test candidates specifically on solar/CAD tasks." },
//             { title: "Interview & Selction", desc: "You interview the shortlisted candidates to ensure a culture fit." },
//             { title: "Onboarding", desc: "We set up their hardware/software and integrate them into your workflow." }
//         ]}
//         benefits={[
//             { icon: <Users />, title: "Plugin Resources", desc: "Immediate access to trained professionals who hit the ground running." },
//             { icon: <ShieldCheck />, title: "Zero Overhead", desc: "No infrastructure, benefits, or training costs for you." },
//             { icon: <Search />, title: "Niche Expertise", desc: "Talent that already understands NEC codes and AHJ requirements." }
//         ]}
//     />
// );

// // 5. Solar Installation Services
// export const SolarInstallation = () => (
//     <BusinessPage
//         title="Indian Solar Installation Services"
//         subTitle="Expert installation crews for residential and commercial solar projects."
//         image="https://plus.unsplash.com/premium_photo-1663076292870-8de8281bd817?q=80&w=1170&auto=format&fit=crop"
//         description={[
//             "Design is only half the battle. RS Solar CAD Group offers professional Solar Installation Services to bring your projects to life. We partner with EPCs and developers to provide skilled installation crews for rooftop, ground-mount, and carport systems.",
//             "Our teams are led by NABCEP-certified professionals who prioritize safety and quality. From racking and module mounting to DC/AC wiring and commissioning, we ensure the system is built strictly according to the engineered plans for long-term reliability."
//         ]}
//         features={[
//             "Residential Roof Mounts",
//             "Commercial Flat Roof Systems",
//             "Ground Mounts & Carports",
//             "Main Panel Upgrades (MPU)",
//             "System Commissioning & Testing",
//             "O&M (Operations & Maintenance)"
//         ]}
//         process={[
//             { title: "Site Prep & Safety", desc: "Safety barriers, fall protection, and material staging." },
//             { title: "Mechanical Install", desc: "Racking installation and flashing to ensure watertight integrity." },
//             { title: "Electrical Work", desc: "Module mounting, stringing, and inverter connections." },
//             { title: "Inspection & Live", desc: "Coordination with building inspectors for final PTO (Permission to Operate)." }
//         ]}
//         benefits={[
//             { icon: <HardHat />, title: "Safety First", desc: "Strict adherence to OSHA standards on every job site." },
//             { icon: <CheckCircle />, title: "Quality Assurance", desc: "Installations that match the engineering plans perfectly." },
//             { icon: <Activity />, title: "Scalable Crews", desc: "Ability to ramp up manpower for large commercial projects." }
//         ]}
//     />
// );

// // 6. Trading & Procurement
// export const TradingProcurement = () => (
//     <BusinessPage
//         title="Trading & Procurement"
//         subTitle="End-to-end supply chain solutions for solar components."
//         image="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&q=80&w=800"
//         description={[
//             "In the volatile solar market, securing equipment at the right price and time is critical. Our Trading & Procurement division leverages global relationships with Tier-1 manufacturers to source high-quality PV modules, inverters, and BOS components.",
//             "We handle the logistics, quality inspections, and warranty management, acting as your single point of contact. deep industry connections allow us to navigate supply chain constraints and offer competitive pricing for projects of any size."
//         ]}
//         features={[
//             "Solar PV Modules (Tier 1)",
//             "Inverters (String, Micro, Hybrid)",
//             "Racking & Mounting Systems",
//             "Energy Storage Systems (ESS)",
//             "BOS Components (Cables, Breakers)",
//             "Logistics & Warehousing"
//         ]}
//         process={[
//             { title: "Requirement Matching", desc: "We match your project specs with the best available components." },
//             { title: "Negotiation", desc: " leveraging volume buying power to get you the best cost per watt." },
//             { title: "Quality Check", desc: "Pre-shipment inspections to ensure equipment integrity." },
//             { title: "Delivery", desc: "Just-in-time delivery to your site or warehouse." }
//         ]}
//         benefits={[
//             { icon: <Truck />, title: "Global Sourcing", desc: "Access to diverse brands and technologies worldwide." },
//             { icon: <ShieldCheck />, title: "Warranty Support", desc: "We assist with warranty claims and replacements." },
//             { icon: <Activity />, title: "Price Protection", desc: "Competitive pricing strategies to protect your project margins." }
//         ]}
//     />
// );
