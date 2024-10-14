import { Box, Button, TextField } from "@mui/material";

const CommentForm = () => {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { width: "100%" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-multiline-static"
        label="Comment"
        multiline
        rows={4}
        defaultValue="Add a Comment"
      />
      <Button type="submit">Add Comment</Button>
    </Box>
  );
};

export default CommentForm;
