import { Info } from 'lucide-react'
import React from 'react'
import PackageCard from './PackageCard'

const Packages = () => {
    const packages = [
        {
            name: "Silver Package",
            rate: '$50',
            pupular: false,
            desc: 'Basic vehicle history report with essential information',
            features: [
                "Instant Report",
                "Vehicle Overview",
                "Market Value",
                "Vehicle Specifications",
                "Sales Listing",
                "Accident Record",
                "Salvage",
                "Theft Record",
                "Title Record",
            ]
        },
        {
            name: "Gold Package",
            rate: '$80',
            pupular: true,
            desc: 'Comprehensive report with additional vehicle details',
            features: [
                "Instant Report",
                "Vehicle Specifications",
                "Sales Listing",
                "Accident Record",
                "Salvage",
                "Theft Record",
                "Title Record",
                "Impounds",
                "Exports",
                "Open Recalls",
                "Installed Options and Packages",

            ]
        },
        {
            name: "Premium Package",
            rate: '$100',
            pupular: false,
            desc: 'Complete vehicle history with premium features and benefits',
            features: [
                "Instant Report",
                "Vehicle Overview",
                "Market Value",
                "Vehicle Specifications",
                "Sales Listing",
                "Accident Record",
                "Salvage",
                "Theft Record",
                "Title Record",
                "Impounds",
                "Exports",
                "Open Recalls",
                "Installed Options and Packages",
                "Active/Expire Warranty",
                "2 Buyers Numbers from our Directory",
                "Buy one get another Report Free for Lifetime",
                "HQ Car Images"

            ]
        }

    ]
    return (
        <div id='pkgs' className= ' border-y py-20 border-y-gray-500 px-2'>
            <div className='relative flex flex-col justify-center' >
                <h1 className="text-5xl text-center  font-bold relative text-white inline-block">Choose Your Package</h1>
                <p className=" text-lg text-center py-4 font-normal text-gray-400">Select the vehicle history report package that best fits your needs

                </p>

            </div>
            <div className="mx-auto w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>


            <section className='flex justify-center items-center  rounded-full py-1 px-4 text-gray-400 w-fit mx-auto bg-gray-500/20 mb-10 mt-20 gap-2'>
                <Info className='text-amber-500 inline w-10 md:w-5 ' />
                <p className=''> NOTE: Once you order the report, the payment is non-refundable.</p>
            </section>

            {/* Packages */}
            <div className='flex flex-wrap justify-center gap-5'>
            {packages.map((item, key)=> <PackageCard key={key} name={item.name} desc={item.desc} popular={item.pupular} features={item.features} />)}

            </div>

           
        </div>
    )
}

export default Packages