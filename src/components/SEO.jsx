import { useEffect } from "react";

const SEO = ({
    title,
    description,
    image = "/og-image.jpg",
    canonical,
}) => {

    useEffect(() => {
        document.title = title;

        const setMeta = (name, content, property = false) => {
            const attribute = property ? "property" : "name";

            let tag = document.querySelector(
                `meta[${attribute}="${name}"]`
            );

            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute(attribute, name);
                document.head.appendChild(tag);
            }

            tag.setAttribute("content", content);
        };

        // Basic SEO
        setMeta("description", description);

        // Open Graph
        setMeta("og:title", title, true);
        setMeta("og:description", description, true);
        setMeta("og:image", image, true);
        setMeta("og:url", canonical, true);

        // Twitter
        setMeta("twitter:title", title);
        setMeta("twitter:description", description);
        setMeta("twitter:image", image);

        // Canonical
        let canonicalTag =
            document.querySelector('link[rel="canonical"]');

        if (!canonicalTag) {
            canonicalTag = document.createElement("link");
            canonicalTag.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalTag);
        }

        canonicalTag.setAttribute("href", canonical);

    }, [title, description, image, canonical]);

    return null;
};

export default SEO;