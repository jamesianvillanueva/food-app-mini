import tw from "twin.macro";

export const Wrapper = tw.div`w-auto m-auto bg-orange-50 select-none md:p-0 p-5`

export const Container = tw.div`flex flex-row relative items-center`

export const Div1 = tw.div`md:w-6/12 w-full relative`

export const SectionTitle = tw.h2`font-extrabold md:text-5xl text-4xl cursor-default font-sans w-max max-w-full text-yellow-900`

export const LeftSection = tw.div`md:w-9/12 m-auto p-5` 

export const SectionText = tw.div`mt-5 font-sans`

export const Img =  tw.img`w-auto max-w-full max-h-full object-fill overflow-hidden md:block hidden opacity-75`

export const Button = tw.button`mt-10 w-48 focus:outline-none text-white bg-orange-500 hover:bg-orange-700 font-medium rounded-full text-sm px-5 py-2.5`