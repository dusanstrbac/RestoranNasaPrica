

const Usluge = () => {

    return (
        <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Naše usluge</h2>
            <p className="mt-2 text-gray-600">
            Pogledajte šta sve nudimo da vaša proslava ili obrok budu nezaboravni.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Usluga 1 */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
            <div className="shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl">
                🎉
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-1">Proslave i događaji</h3>
                <p className="text-gray-600">
                Organizujemo proslave, rođendane i privatne događaje sa kompletnim menijem.
                </p>
            </div>
            </div>

            {/* Usluga 2 */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
            <div className="shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
                🥡
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-1">Ketering</h3>
                <p className="text-gray-600">
                Profesionalni ketering za firme, svečane večere ili privatne proslave.
                </p>
            </div>
            </div>

            {/* Usluga 3 */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
            <div className="shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl">
                🚚
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-1">Dostava hrane</h3>
                <p className="text-gray-600">
                Brza i sigurna dostava vaših omiljenih jela direktno do vrata.
                </p>
            </div>
            </div>

            {/* Usluga 4 */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
            <div className="shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl">
                🍷
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-1">Specijalne večere</h3>
                <p className="text-gray-600">
                Tematske i privatne večere sa pažljivo odabranim menijem i vinom.
                </p>
            </div>
            </div>
        </div>
        </section>


    )
}

export default Usluge;