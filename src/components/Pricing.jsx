import { Check, Star } from "lucide-react";

const plans = [
    {
        name: "Эхлэх",
        price: "25.99",
        description: "Хувь хүн болон жижиг багт тохиромжтой",
        features: [
            "5 хүртэлх багийн гишүүн",
            "10GB хадгалах сан",
            "Суурь аналитик",
            "Имэйл дэмжлэг",
            "API хандалт",
            "Гар утасны апп",
        ],
        mostPopular: false,
    },
    {
        name: "Мэргэжлийн",
        price: "69.99",
        description: "Өсөж буй бизнесүүдэд хамгийн тохиромжтой",
        features: [
            "25 хүртэлх багийн гишүүн",
            "100GB хадгалах сан",
            "Дэвшилтэт аналитик",
            "Мэргэжлийн дэмжлэг",
            "API хандалт",
            "Гар утасны апп",
            "Захиалгат интеграц",
            "Өндөр түвшний хамгаалалт",
        ],
        mostPopular: true,
    },
    {
        name: "Байгууллагын",
        price: "120",
        description: "Томоохон байгууллагад зориулагдсан",
        features: [
            "Хязгааргүй багийн гишүүд",
            "Хязгааргүй хадгалах сан",
            "Байгууллагын аналитик",
            "24/7 утасны дэмжлэг",
            "API хандалт",
            "Гар утасны апп",
            "Захиалгат интеграц",
            "Өндөр түвшний хамгаалалт",
            "Хувийн account manager",
            "Тусгай SLA",
        ],
        mostPopular: false, 
    },
];

export default function Pricing() {
    return ( 
        <section 
            id="pricing"
            className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-black"             
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                            Энгийн, Ил тод
                        </span>
                        <br />
                        <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Үнийн төлөвлөгөө
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
                        Өөрийн хэрэгцээнд тохирох төлөвлөгөөг сонгоорой. Бүх төлөвлөгөө 14 хоногийн үнэгүй туршилттай.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
                    {plans.map((plan, index) => (
                        <div 
                            key={index} 
                            className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${
                                plan.mostPopular 
                                    ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105" 
                                    : "border-slate-800 hover:border-slate-700"
                            }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                            
                            {plan.mostPopular && (
                                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
                                        <span>Хамгийн түгээмэл</span> 
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-6 sm:mb-8">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline justify-center">
                                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                        ${plan.price}
                                    </span>
                                    <span className="text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base">/сар</span>
                                </div>
                            </div>

                            <div className="flex-grow">
                                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                                            <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                                                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400"/>
                                            </div>
                                            <span className="text-gray-300 text-sm sm:text-base">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button 
                                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer text-sm sm:text-base ${
                                    plan.mostPopular
                                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                                        : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                                }`}
                            >
                                Эхлэх
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-8 sm:mt-12 text-center">
                    <p className="text-gray-400 text-base sm:text-lg">
                        Захиалгат төлөвлөгөө хэрэгтэй юу?{" "}
                        <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Манай борлуулалтын багтай холбогдоорой
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}