import { Helmet } from 'react-helmet';

const SEO = ({
    title = "Winz Infotech - Digital Marketing & Web Development Agency",
    description = "Transform your business with Winz Infotech's comprehensive digital marketing, web development, branding, and design services. Boost your online presence and drive growth.",
    keywords = "digital marketing, web development, branding, graphic design, social media management, performance marketing, lead generation, website design, SEO services, content marketing",
    image = "/logoNew.png",
    url = "https://winzinfotech.com",
    type = "website",
    author = "Winz Infotech",
    canonical,
    noindex = false,
    nofollow = false,
    structuredData
}) => {
    const siteUrl = "https://winzinfotech.com";
    const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
    const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
            
            {/* Canonical URL */}
            {canonical && <link rel="canonical" href={canonical} />}
            
            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:alt" content={title} />
            <meta property="og:site_name" content="Winz Infotech" />
            <meta property="og:locale" content="en_US" />
            
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="twitter:image:alt" content={title} />
            <meta name="twitter:site" content="@WinzInfotech" />
            <meta name="twitter:creator" content="@WinzInfotech" />
            
            {/* Additional Meta Tags for Better SEO */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="distribution" content="global" />
            <meta name="rating" content="general" />
            
            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
