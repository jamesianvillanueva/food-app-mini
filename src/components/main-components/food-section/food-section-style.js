import tw from "twin.macro"


export const Wrapper = tw.div`m-auto w-full bg-amber-900`

export const Container = tw.div`flex flex-col relative md:m-24`

export const Section = tw.div`grid lg:grid-cols-2 p-3`
 
export const Div1 = tw.div`md:mt-20 mt-5`

export const SectionTitle = tw.h2`font-medium md:text-5xl text-3xl cursor-default font-sans w-max max-w-full text-white p-3`

export const SectionText = tw.div`font-sans p-3 text-yellow-900 w-9/12 text-gray-300 text-sm`

export const Button = tw.button`md:absolute right-5 items-center w-60 focus:outline-none text-white bg-orange-500 hover:bg-orange-700 font-medium rounded-full text-base font-medium px-5 py-2.5 p-5`

export const NavBarContainer = tw.div`p-1`

export const GridContainer = tw.div`grid lg:grid-cols-3 gap-10 p-5`

export const Boxes = tw.div`shadow-md border border-gray-200 rounded-lg m-auto p-10 border-orange-100 hover:border-orange-500 hover:drop-shadow-2xl bg-white`

export const Title = tw.div`text-center text-2xl font-sans text-yellow-900 font-medium`

export const Description = tw.div`text-center p-5 text-yellow-900`

export const Image = tw.img`w-auto max-w-full max-h-full object-fill overflow-hidden block m-auto p-10 w-2/4`

export const ButtonLabel = tw.div`text-orange-500 text-center hover:text-orange-900`