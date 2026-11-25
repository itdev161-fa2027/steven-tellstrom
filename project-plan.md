# Final Project Plan

## Milestone 1: Plan

Path: B (two medium enhancements)

### Enhancement 1: Markdown Support

What the user will see:

Users will be able to write their posts using markdown, like headings, bold, italisization. When a post is opened it will show up formatted instead of showing the raw symbols. The post form will also have a preview so you can see what your post will appear like while you're actively typing.

Back-end changes: none

Front-end changes:

- Add a preview box next to the body textarea in PostForm.jsx
- Use react-markdown and remark-gfm in PostDetail.jsx so the post body shows up as Markdown
- utilize remove-markdown to fix PostCard.jsx so the little preview on the home page doesn't show markdown symbols
- Additional CSS so lists, headings and links look ok

New packages: react-markdown, remark-gfm, remove-markdown

What I will test:

- If I type HTML into a post, it just shows as text and doesn't run
- Headings, bold, italic, and links show up right on the post page
- Numbered lists and bullet lists look right
- Preview in the form looks the same as the post page
- The post cards on the home page show normal text and not markdown symbols (#,*,etc.)

___

### Enhancement 2: Search

What the user will see: There'll be a search box on the home page where you can type and find posts that have the matching word in the title/body. Results will continue to change as words are being typed like F3 on a browser.

Back-end changes:

- If search is empty, return all the posts like normal
- Change the GET /api/posts so it can take on search value (like /api/posts?search=react)
- Search in both title and body using $regex with $or, and make it not case sensitive
- Escape special characters like . and * so they don't mess up regex

Front-end changes:

- Add a search box and a clear button to Home.jsx (or maybe make a separate SearchBar.jsx)
- Add delay with setTimeout in useEffect so only searches after you stop typing for a second, instead of every single keystroke
- Make the loading message only show in the post list part so the search box doesn't disappear while it's loading
- Show "No matches" if nothing matches search
- Change getPosts in api.js so it sends the search text

New packages: none

What I will test:

- Searching also finds the post titles
- Results show up after stoping typing without clicking anything
- Searching finds words in post body
- UPPERCASE and lowercase search
- Typing stuff like * or . doesn't break server
- Clear button
- "No result" button

### Task List

Week 2 (search):
1. Get the back end search working in GET /api/posts
2. Fix the special characters problem so the server doesn't crash
3. Add the search box to Home.jsx with the delay, and update getPosts in api.js
4. Add the "no results" message and the clear button

Week 3 (markdown):
5. Install react-markdown and remark-gfm and get posts showing as Markdown in PostDetail.jsx
6. Add the preview to PostForm.jsx
7. Get rid of the Markdown symbols on the post cards with remove-markdown
8. Add CSS so the Markdown stuff looks good

Week 4:
9. Go back and test everything from Activities 1-9 plus the new stuff to make sure nothing broke, and fix any bugs

### Questions or Risks

### (for markdown feature)
- Could my existing css styling cause any clashing with the markdown styling?
- Not sure if remove-markdown knows about the extra stuff remark-gfm adds, like tables or strikethrough. Might want to make a test post with a table and see if the home page card looks weird.
- Not sure if the preview is going to feel slow on a really long post since I think it re-renders the markdown on every keystroke.

### (for search feature)
- What happens if there's no posts in the database, does searchbox still show up fine or does something break?
- If the page is refreshed or I click to a different page, does my search just disappear or go back to showing what I had at the end of the refresh.
- I used $regex but I read that it can be slow on bigger collections since it can't really use an index properly. Probably doesn't matter for this project but not 100% sure.
- don't know if api.js is handling weird characters ok when it builds the URL, like spaces or symbols. Might need to test that.
- Should I trim spaces from the search box before sending it? What happens if someone just types a space.


## AI Usage

Tools: Claude Code

What I used them for: Helped with task list and order of tasks, understanding what front-end and back-end changes would be necessary and thinking about different risk / edge cases for the markdown and search feature.

How I checked the result: Partially read docs for react-markdown, remark-gfm, remove markdown and MongoDB's $regex operator to review how these tools actually work in more detail.