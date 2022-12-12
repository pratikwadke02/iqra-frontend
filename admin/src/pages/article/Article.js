import { useState } from 'react';
import React from 'react';
// material-ui
import { Typography, Box, TextField } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Article = () => {
    const [article, setArticle] = useState({
        heading: '',
        rating: '',
        tags: '',
        prelims: '',
        mains: '',
        editor: '',
        questionHeading: '',
        question: '',
        options: '',
        answer: '',
        subject: ''
    });

    const handleChange = (event) => {
        setArticle({ ...article, [event.target.name]: event.target.value });
    };

    return (
        <MainCard title="Article">
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                    label="Heading"
                    variant="outlined"
                    fullWidth
                    sx={{ mr: { sm: 1 } }}
                    type="text"
                    name="heading"
                    value={article.heading}
                    onChange={handleChange}
                />
                <TextField
                    label="Rating"
                    variant="outlined"
                    fullWidth
                    sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
                    type="text"
                    name="rating"
                    value={article.rating}
                    onChange={handleChange}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                    label="Prelims"
                    variant="outlined"
                    fullWidth
                    sx={{ mr: { sm: 1 } }}
                    type="text"
                    name="prelims"
                    value={article.prelims}
                    onChange={handleChange}
                />
                <TextField
                    label="Mains"
                    variant="outlined"
                    fullWidth
                    sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
                    type="text"
                    name="mains"
                    value={article.mains}
                    onChange={handleChange}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                    label="Prelims"
                    variant="outlined"
                    fullWidth
                    sx={{ mr: { sm: 1 } }}
                    type="text"
                    name="prelims"
                    value={article.prelims}
                    onChange={handleChange}
                />
                <TextField
                    label="Mains"
                    variant="outlined"
                    fullWidth
                    sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
                    type="text"
                    name="mains"
                    value={article.mains}
                    onChange={handleChange}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                    label="Tags"
                    variant="outlined"
                    fullWidth
                    sx={{ mr: { sm: 1 } }}
                    type="text"
                    name="prelims"
                    value={article.prelims}
                    onChange={handleChange}
                />
                <Box sx={{ ml: { sm: 1 }, width: '100%' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                    label="Data Source"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    type="text"
                    name="editor"
                    value={article.editor}
                    onChange={handleChange}
                />
            </Box>
        </MainCard>
    );
};

export default Article;
