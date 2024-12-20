'use client'
import ControlledSelect from "@/components/atoms/select";
import RecipeReviewCard from "@/components/organisms/card";
import TabPanel from "@/components/organisms/tab-panel";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { useLibraryOfYourForm } from "./validate";
import ControlledInput from "@/components/atoms/input";
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from "@/components/atoms/search-bar";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function LibraryOfYour() {
    const [value, setValue] = useState(0);
    const { control } = useLibraryOfYourForm()
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const dataList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h3" gutterBottom>
                Thư viện của bạn
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="tab-library-of-your">
                    <Tab label="Học phần" {...a11yProps(0)} />
                    <Tab label="Thư mục" {...a11yProps(1)} />
                    <Tab label="Bài kiểm tra thử" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box sx={{ display: 'flex', flexWrap: 'nowrap', flexDirection: "row", justifyContent: "space-between", gap: 2, marginBottom: '20px' }}>
                  <SearchBar />
                </Box>
                <Box sx={{ margin: "10px 0px", display: "grid", gridTemplateColumns: "1fr", gap: "40px"}}>
                    {dataList.map((item, index) => (
                        <RecipeReviewCard key={index}/>
                    ))}
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Học phần 2
            </TabPanel>
            <TabPanel value={value} index={2}>
                Học phần 3
            </TabPanel>
        </Box>
    );
}
