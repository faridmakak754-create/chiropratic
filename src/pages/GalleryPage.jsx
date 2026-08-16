import React from "react";
import NavBar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import ImageCard from "../components/ImageCard";
import SEO from "../components/SEO";

const GalleryPage = () => {

    const galleryImages = [
        {
            id: 1,
            image: "/images/4.jpeg",
            title: "Our Clinic",
        },
        {
            id: 2,
            image: "/images/6.jpeg",
            title: "Waiting Room",
        },
        {
            id: 3,
            image: "/images/7.jpeg",
            title: "Counter",
        },
        {
            id: 4,
            image: "/images/10.jpeg",
            title: "Clinic",
        },
        {
            id: 5,
            image: "/images/12.jpeg",
            title: "Patient Care",
        },
        {
            id: 6,
            image: "/images/14.jpeg",
            title: "Patient Care",
        },
        {
            id: 7,
            image: "/images/15.jpeg",
            title: "Back Pain",
        },
        {
            id: 8,
            image: "/images/doctor.jpeg",
            title: "Treatment",
        },


    ];


    return (
        <div className="bg-white">

            <SEO
                title="Chiropractic Clinic Gallery in Manipur | WM Amir"
                description="View the gallery of WM Amir Chiropractic Health Care in Manipur, featuring our clinic environment, facilities and chiropractic care services."
                canonical="https://yourdomain.com/gallery"
            />

            {/* ================= NAVBAR ================= */}
            <NavBar />


            {/* ================= PAGE HERO ================= */}

            <PageHero
                badge="WM Amir Gallery"
                title="A Look Inside"
                highlight="Our Care"
                description="Explore WM Amir Chiropractic Health Care and get a closer look at our clinic, treatment environment and professional approach to patient care."
            />


            {/* ================= GALLERY SECTION ================= */}

            <section className="pt-8 pb-6 px-6 md:pt-12 md:pb-8">

                <div className="max-w-7xl mx-auto">

                    {/* Header */}

                    <div className="flex flex-col items-center">

                        <div className="flex flex-col items-center gap-2 pb-8 md:pb-10">

                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-teal-600 to-sky-800 bg-clip-text text-transparent leading-tight max-sm:text-3xl text-center">
                                WM Amir Gallery
                            </h1>

                            <p className="text-slate-600 font-semibold text-center max-sm:text-sm">
                                A glimpse into our care and treatment environment.
                            </p>

                        </div>


                        {/* Description */}

                        <p className="max-w-4xl mx-auto text-center text-slate-600 font-medium leading-7 max-sm:text-sm">
                            Explore our chiropractic care environment through
                            moments that reflect patient comfort, professional
                            treatment and our commitment to helping people move
                            with greater comfort and confidence.
                        </p>


                        {/* ================= IMAGE GRID ================= */}

                        <div
                            id="gallery"
                            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-12 mb-8"
                        >

                            {galleryImages.map((item) => (
                                <ImageCard
                                    key={item.id}
                                    image={item.image}
                                    title={item.title}
                                />
                            ))}

                        </div>

                    </div>


                    {/* ================= BOTTOM MESSAGE ================= */}

                    <div className="max-w-7xl mx-auto bg-gradient-to-r from-slate-900 via-slate-800 to-teal-900 py-8 px-6 md:px-10 rounded-2xl shadow-lg">

                        <h4 className="text-center text-2xl text-white font-semibold mb-2 max-sm:text-xl">
                            Your Comfort. Our Care.
                        </h4>

                        <p className="text-slate-300 font-medium text-center max-w-3xl mx-auto leading-7 max-sm:text-sm">
                            Every part of our care environment is focused on
                            providing a comfortable and professional experience
                            while supporting better movement and physical
                            well-being.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= FOOTER ================= */}

            <Footer />

        </div>
    );
};

export default GalleryPage;