import * as React from 'react';
import { Box, Grid } from '@mui/material';
import MainNewsPage from './MainNewsPage';
import NewsListItems from './NewsList';
import NewsTabs from './NewsTabs';

export default function Home() {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <MainNewsPage />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <NewsListItems />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <NewsTabs />
                </Grid>
            </Grid>
        </Box>
    );
}
