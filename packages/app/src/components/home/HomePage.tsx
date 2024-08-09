import {Content, Header} from '@backstage/core-components';
import React from 'react';
import {FeaturedDocsCard, HomePageStarredEntities, WelcomeTitle} from "@backstage/plugin-home";
import {SearchContextProvider} from "@backstage/plugin-search-react";
import {Grid, makeStyles} from "@material-ui/core";
import {HomePageSearchBar} from "@backstage/plugin-search";

const useStyles = makeStyles(theme => ({
    searchBarInput: {
        maxWidth: '60vw',
        margin: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '50px',
        boxShadow: theme.shadows[1],
    },
    searchBarOutline: {
        borderStyle: 'none'
    }
}));
export const HomePage = () => {
    const languages = ['English']
    const classes = useStyles();
    return (
        <>
            <Header title={<WelcomeTitle language={languages}/>} pageTitleOverride="Home"/>;

            <SearchContextProvider>
                <Content>
                    <Grid container justifyContent="center" spacing={6}>
                        <Grid container item xs={12} justifyContent='center'>
                            <HomePageSearchBar
                                InputProps={{
                                    classes: {
                                        root: classes.searchBarInput,
                                        notchedOutline: classes.searchBarOutline
                                    }
                                }}
                                placeholder="Search"
                            />
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12} md={6}>
                                <HomePageStarredEntities/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FeaturedDocsCard
                                      filter={{
                                       'spec.type': 'documentation',
                                       'metadata.name': 'getting-started-with-backstage',
                                   }}
                                   />
                            </Grid>
                        </Grid>
                    </Grid>
                </Content>
            </SearchContextProvider>
        </>
    )

};