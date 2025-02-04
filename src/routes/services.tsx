import { createFileRoute } from '@tanstack/react-router'
import services from "@/data/services.json"

export const Route = createFileRoute('/services')({
  component: ServicesRoute,
})

interface Service {
    ID: number
    name: string
}

interface ServiceWithLetter extends Service {
    letter: string
}

interface LetterGroup {
    letter: string
    services: ServiceWithLetter[]
}


function ServicesRoute() {
    // Group services by first letter (or '0-9' for numbers)
    const groupedServices: { [key: string]: Service[] } = services.reduce((acc, service) => {
        const firstChar = service.name[0].toUpperCase()
        const key = /[0-9]/.test(firstChar) ? '0-9' : firstChar
        if (!acc[key]) acc[key] = []
        acc[key].push(service)
        return acc
    }, {} as { [key: string]: Service[] })

    // Sort the keys and create an array of entries
    const sortedGroups: [string, Service[]][] = Object.entries(groupedServices).sort((a, b) =>
        a[0] === '0-9' ? -1 : b[0] === '0-9' ? 1 : a[0].localeCompare(b[0])
    )

    // Function to split services into balanced columns
    const splitIntoBalancedColumns = (groups: [string, Service[]][], numColumns: number): ServiceWithLetter[][] => {
        const flatServices: ServiceWithLetter[] = groups.flatMap(([letter, services]) =>
            services.map(service => ({ ...service, letter }))
        )
        const totalServices = flatServices.length
        const targetColumnSize = Math.ceil(totalServices / numColumns)

        const columns: ServiceWithLetter[][] = Array.from({ length: numColumns }, () => [])
        let currentColumn = 0

        flatServices.forEach((service, index) => {
            if (index > 0 && index % targetColumnSize === 0 && currentColumn < numColumns - 1) {
                currentColumn++
            }
            columns[currentColumn].push(service);
        });

        return columns;
    };

    const columns: ServiceWithLetter[][] = splitIntoBalancedColumns(sortedGroups, 3);


    return (
        <main className="flex flex-col justify-center items-center mt-24">
            <h1 className="text-5xl font-bold font-poppins">Service List</h1>
            <div className="flex justify-center items-start min-h-screen py-8 -mr-16">
                <div className="w-full max-w-7xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {columns.map((column, columnIndex) => (
                            <div key={columnIndex} className="rounded-lg p-4">
                                {column.reduce((acc: LetterGroup[], service) => {
                                    if (acc.length === 0 || acc[acc.length - 1].letter !== service.letter) {
                                        acc.push({letter: service.letter, services: [service]});
                                    } else {
                                        acc[acc.length - 1].services.push(service);
                                    }
                                    return acc;
                                }, []).map(({letter, services}) => (
                                    <div key={letter} className="mb-6">
                                        <h2 className="text-xl font-bold mb-2">{letter}</h2>
                                        <ul className="text-left">
                                            {services.map((item) => (
                                                <li key={item.ID} className="mb-1">
                                                    {item.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
