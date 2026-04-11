import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "TechCorp компанийн Ахлах хөгжүүлэгч",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        content: "CodeFlow AI нь бидний код бичих арга барилыг бүрэн өөрчилсөн. AI санал болгох функц маш нарийвчлалтай бөгөөд хөгжүүлэлтийн хугацааг 40%-иар бууруулсан. Яг л ахлах хөгжүүлэгч кодын мөр бүрийг шалгаж байгаа мэт санагддаг.",
        rating: 5,
    },
    {
        name: "Marcus Rodriguez",
        role: "StartupHub компанийн CTO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        content: "Debug хийх боломжууд үнэхээр гайхалтай. Бид production-д хүрэхээс нь өмнө олон чухал алдааг илрүүлж чадсан. AI-д суурилсан алдаа илрүүлэх систем нь хөгжүүлэлтийн баг бүрт зайлшгүй хэрэгтэй.",
        rating: 5,
    },
    {
        name: "Emily Thompson",
        role: "DataFlow компанийн Ахлах инженер",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        content: "Security шалгалтын функц биднийг томоохон эмзэг байдлаас аварсан. Бодит цагийн скан болон зөвлөмжүүд нь салбарын шилдэг стандартуудыг дагаж мөрддөг. Манай багийн ажлын урсгалд зайлшгүй хэрэгтэй хэрэгсэл болсон.",
        rating: 5,
    },
    {
        name: "David Kim",
        role: "InnovateLabs компанийн Full Stack хөгжүүлэгч",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        content: "Эхэндээ эргэлзэж байсан ч CodeFlow AI миний бүх хүлээлтийг давсан. Код автоматаар гүйцээх нь маш ухаалаг, контекст ойлгодог, яг юу бүтээх гэж байгааг минь ойлгодог. Үнэхээр үнэ цэнтэй!",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section 
            id="testimonials" 
            className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-black overflow-hidden"
        >
            {/* Background effects */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"/>

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                            Хөгжүүлэгчдийн хайртай
                        </span>
                        <br />
                        <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Дэлхий даяар
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
                        CodeFlow AI-ийн талаар хөгжүүлэгчид юу хэлж байгааг харна уу
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"/>
                            
                            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote className="w-16 h-16 text-blue-400" />
                            </div>

                            <div className="relative">
                                {/* Stars */}
                                <div className="flex space-x-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center space-x-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"/>
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.name}
                                            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-slate-700 group-hover:border-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-base sm:text-lg">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-gray-400 text-sm sm:text-base">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 sm:mt-16 text-center">
                    <p className="text-gray-400 text-base sm:text-lg mb-4">
                        Аль хэдийн мянга мянган хөгжүүлэгчид CodeFlow AI ашиглаж байна
                    </p>
                    <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/30 mx-auto">
                        <span>Үнэгүй туршиж эхлэх</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}