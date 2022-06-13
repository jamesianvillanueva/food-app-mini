import tw from "twin.macro";


export const Wrapper = tw.div`m-auto w-full`

export const Container = tw.div`flex flex-col relative md:m-24`

export const Section = tw.div`m-auto p-5` 

export const SectionTitle = tw.h2`font-medium md:text-5xl text-3xl cursor-default font-sans w-max max-w-full text-yellow-900 m-auto`

export const SectionText = tw.div`font-sans w-9/12 m-auto p-3 text-center`

export const GridContainer = tw.div`grid lg:grid-cols-3 gap-10 p-5`

export const Boxes = tw.div`shadow-md border border-gray-200 rounded-lg m-auto p-10 border-orange-100 hover:border-orange-200 hover:drop-shadow-2xl`

export const Title = tw.div`text-center text-2xl font-sans text-yellow-900 font-medium`

export const Description = tw.div`text-center p-5 text-yellow-900`

export const Image = tw.img`w-auto object-fill overflow-hidden block m-auto p-10`
