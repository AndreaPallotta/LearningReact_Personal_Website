import React from 'react';
import MetaTags from 'react-meta-tags';

function MetaTagsHeader() {
    return (
        <MetaTags>
            <title>Andrea Pallotta's Website</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="description" content="Website of a software engineering college student"></meta>
            <meta name="keywords" content="HTML, CSS, JavaScript, Software, Software Engineering, Internship, coop, co-op, Java, React, ReactJS, Website, Andrea Pallotta, Pallotta, Andrea"></meta>
            <meta name="author" content="Andrea Pallotta"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="robots" content="index, follow, noimageindex" />
            <meta name="googlebot" content="index, follow, noimageindex" />
            <meta name = "revised" content = "apallotta, 12/9/2020" />
            <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"></meta>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
            <meta name="theme-color" content="#ffffff"></meta>
            <meta name="application-name" content="My Site"></meta>
        </MetaTags>
    );
}

export default MetaTagsHeader;