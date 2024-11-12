import Footer from "@/components/footer";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@packages/ui/lib/utils";

export default function SignInLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>

            {/* <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10  '>
                <div className='  text-center justify-center  w-screen ]'>
                    {children}
                </div>
            </section> */}

            <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10  overflow-hidden">
                <div className='  text-center justify-center  w-screen ]'>
                    {children}
                </div>

                <GridPattern
                    width={80}
                    height={80}
                    x={-1}
                    y={-1}
                    strokeDasharray={"8"}
                    className={cn(
                        "[mask-image:linear-gradient(to_right,white,transparent,transparent)] ",
                        "inset-x-0 inset-y-[-50%] h-[200%] w-[100%]",
                    )}
                />

            </div>
            <Footer />



        </>
    );
}
