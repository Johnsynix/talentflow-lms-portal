# Dev A Frontend Screen Handoff (61 Screens)

This file lists every screen in `Dev_A_Designs` and the frontend work expected from Dev A.

Naming note: files with `(1)`, `(2)`, `(3)` are treated as state variants of a base screen and should reuse the same route/component with different data or UI state.

## Global build expectations for Dev A

1. Build reusable layout shells (`PublicLayout`, `AdminLayout`, `InstructorLayout`, `LearnerLayout`) and avoid duplicate page scaffolding.
2. Reuse core UI primitives (table, tabs, cards, badges, forms, modal, toast, pagination).
3. Make every screen responsive for desktop and mobile breakpoints.
4. Implement interaction states from variants: default, populated, empty, validation error, and success/confirmation where applicable.
5. Wire routes and placeholder API hooks so backend integration can be attached without refactoring page structure.

## Screen-by-screen implementation plan

| # | Screen file | Type | Area | What the screen is for | What Dev A needs to do |
| --- | --- | --- | --- | --- | --- |
| 1 | Add Announcement (1).png | Variant | Admin | Alternate state of announcement creation | Reuse Add Announcement form and implement the variant state (validation or filled values), including button and loading feedback. |
| 2 | Add Announcement.png | Base | Admin | Compose a new announcement | Build announcement form with title, audience, body, attachment support, and submit/cancel actions. |
| 3 | Admin Courses.png | Base | Admin | Manage course catalog | Build admin courses table or grid with search, filter, status badges, and row actions (view, edit, publish, archive). |
| 4 | Admin dashboard.png | Base | Admin | Platform overview for admins | Build KPI cards, recent activity list, quick links, and responsive dashboard layout. |
| 5 | Admin Notification view.png | Base | Admin | View full notification content | Build notification detail page or modal with full message body, metadata, and back action. |
| 6 | Admin Notification.png | Base | Admin | Admin notification inbox | Build notification list with read and unread states, filters, and bulk mark-as-read action. |
| 7 | Admin Users.png | Base | Admin | User management | Build users table with role and status filters, search, pagination, and row actions to view, edit, or suspend. |
| 8 | Analytics.png | Base | Admin | Product and learning analytics | Build analytics page with charts, date-range filters, and export placeholder actions. |
| 9 | Announcement (1).png | Variant | Learner/Admin | Alternate state of announcement view | Reuse Announcement page and support second state (expanded item, filter active, or empty state). |
| 10 | Announcement.png | Base | Learner/Admin | Announcement feed | Build announcement list or cards with read markers and click-through to details. |
| 11 | Assign Learner to Team.png | Base | Admin | Assign learner to a team | Build assignment form or modal with learner selector, team selector, validation, and success toast. |
| 12 | Assignments 3.png | Variant | Learner | Alternate assignments state | Reuse assignments module and implement variant state (for example overdue, completed, or filtered results). |
| 13 | Assignments.png | Base | Learner | Assignment center | Build assignments list or table with status tabs, due dates, sort controls, and row actions. |
| 14 | Certificate.png | Base | Learner | View and export certificate | Build certificate screen with print-friendly layout and actions for download, share, and back. |
| 15 | Content.png | Base | Learner/Course | Course content browsing | Build content page with section navigation, lesson or resource cards, and progress markers. |
| 16 | Course Catalog.png | Base | Learner | Discover available courses | Build course catalog grid with category filters, search, pagination, and enrollment CTA. |
| 17 | Course Details.png | Base | Learner | Course overview and syllabus | Build course details page with hero, syllabus modules, instructor block, and start or continue CTA. |
| 18 | Create team allocations.png | Base | Admin | Create team allocation entry | Build create-allocation form with team and capacity fields, validation, and save or cancel states. |
| 19 | Discussion.png | Base | Learner/Instructor | Messaging and collaboration | Build discussion interface with channel list, message thread, and composer input. |
| 20 | Edit team allocations.png | Base | Admin | Edit team allocation | Build edit-allocation screen with prefilled values, validation, and update confirmation feedback. |
| 21 | Edit Users.png | Base | Admin | Edit user profile and permissions | Build edit-user form for role, status, and profile fields with save or cancel and inline validation. |
| 22 | Email Verification.png | Base | Auth | Verify user email | Build OTP verification UI with 6-digit input, resend timer, and submit loading state. |
| 23 | Forgotten password.png | Base | Auth | Request password reset | Build forgot-password form with email input, submit action, and confirmation state. |
| 24 | Insructors Analytics.png | Base | Instructor | Instructor performance analytics | Build instructor analytics cards and charts focused on learners, submissions, and course performance. |
| 25 | Insructors courses.png | Base | Instructor | Manage instructor courses | Build instructor courses list with create and edit actions, status indicators, and filter controls. |
| 26 | Insructors Create courses (1).png | Variant | Instructor | Alternate state of create course | Reuse create-course page and support alternate form state (validation errors or filled preview state). |
| 27 | Insructors Create courses.png | Base | Instructor | Create a new course | Build multi-section create-course form (title, description, modules, publish settings). |
| 28 | Insructors dashboard (1).png | Variant | Instructor | Alternate instructor dashboard state | Reuse instructor dashboard with variant KPI or content state from design. |
| 29 | Insructors dashboard.png | Base | Instructor | Instructor home dashboard | Build instructor dashboard with summary cards, recent submissions, and quick action links. |
| 30 | Insructors discussion (1).png | Variant | Instructor | Alternate discussion state | Reuse instructor discussion module and implement second state (selected thread, filter, or no messages). |
| 31 | Insructors discussion.png | Base | Instructor | Instructor messaging | Build instructor discussion page with channels, conversation pane, and message composer. |
| 32 | Insructors edit Profile (1).png | Variant | Instructor | Alternate edit-profile state | Reuse edit-profile form and support validation, error, or success state from design. |
| 33 | Insructors edit Profile.png | Base | Instructor | Edit instructor profile | Build instructor profile form with avatar upload, bio, contact fields, and save flow. |
| 34 | Insructors grades (1).png | Variant | Instructor | Alternate gradebook state | Reuse gradebook and implement alternate state (sorted, filtered, or edited grade row). |
| 35 | Insructors grades.png | Base | Instructor | Grade learner work | Build gradebook table with filters, inline grade inputs, and save or update interactions. |
| 36 | Insructors learners (1).png | Variant | Instructor | Alternate learners list state | Reuse learners list and support variant state (search empty, filter applied, or details panel). |
| 37 | Insructors learners.png | Base | Instructor | Instructor learner roster | Build learners table or cards with progress indicators and row-level drill-down actions. |
| 38 | Insructors Profile (1).png | Variant | Instructor | Alternate profile display state | Reuse instructor profile page and implement second display state. |
| 39 | Insructors Profile.png | Base | Instructor | Instructor profile view | Build instructor profile page with bio, stats, courses, and contact or action buttons. |
| 40 | Insructors submission (1).png | Variant | Instructor | Alternate submissions state | Reuse submissions page and implement variant state (graded, pending, filtered, or empty). |
| 41 | Insructors submission.png | Base | Instructor | Assignment submission management | Build submissions list and detail view with status badges, grading action, and feedback panel. |
| 42 | Landing screen.png | Base | Public | Marketing landing page | Build public landing sections (hero, value props, testimonials, CTA) with responsive behavior. |
| 43 | Learners dashboard.png | Base | Learner | Learner overview dashboard | Build learner dashboard with progress cards, announcements, deadlines, and quick links. |
| 44 | lesson page.png | Base | Learner | Lesson learning experience | Build lesson page with media or content panel, side navigation, and next or previous controls. |
| 45 | Log In.png | Base | Auth | User sign-in | Build login form with email, password, remember-me, password visibility toggle, and auth links. |
| 46 | My team.png | Base | Learner | Team overview | Build team page with member cards, team info, and collaboration entry points. |
| 47 | Notification.png | Base | Learner/User | Personal notification center | Build user notifications list with read and unread indicators and detail navigation. |
| 48 | Profile (1).png | Variant | Learner | Alternate profile state | Reuse learner profile and implement variant tab or data state from design. |
| 49 | Profile.png | Base | Learner | Learner profile | Build learner profile page with personal information, stats, tabs, and editable sections. |
| 50 | Progress.png | Base | Learner | Progress tracking | Build progress page with course completion, assignment status, and filterable progress tables or charts. |
| 51 | Reset Password.png | Base | Auth | Set a new password | Build reset-password form with password rules checklist, confirm field, and success redirect state. |
| 52 | Setting (1).png | Variant | User Settings | Settings variant A | Reuse settings page and implement first alternate state from design. |
| 53 | Setting (2).png | Variant | User Settings | Settings variant B | Reuse settings page and implement second alternate state from design. |
| 54 | Setting (3).png | Variant | User Settings | Settings variant C | Reuse settings page and implement third alternate state from design. |
| 55 | Setting change email address.png | Base | User Settings | Change email flow | Build change-email form with current-email display, new-email field, and password confirmation. |
| 56 | Setting change password (1).png | Variant | User Settings | Change-password variant A | Reuse change-password screen and implement alternate validation or state view. |
| 57 | Setting change password (2).png | Variant | User Settings | Change-password variant B | Reuse change-password screen and implement second alternate state from design. |
| 58 | Setting change password.png | Base | User Settings | Change password flow | Build change-password form with current, new, and confirm fields and inline strength validation. |
| 59 | Setting.png | Base | User Settings | Settings overview | Build settings home with grouped setting sections, toggles, and links to subpages. |
| 60 | Sign up.png | Base | Auth | User registration | Build signup form with required fields, validation, and handoff to email verification flow. |
| 61 | Team Allocation.png | Base | Admin | Team allocation listing | Build team allocation list or table with create, edit, delete actions and status indicators. |

## Suggested implementation order for Dev A

1. Auth and public flow: `Landing screen`, `Sign up`, `Log In`, `Email Verification`, `Forgotten password`, `Reset Password`.
2. Learner core: `Learners dashboard`, `Course Catalog`, `Course Details`, `lesson page`, `Assignments`, `Progress`, `Profile`, `Setting`.
3. Team and communication: `My team`, `Team Allocation`, `Assign Learner to Team`, `Discussion`, `Notification`, `Announcement`.
4. Instructor module: all `Insructors ...` screens (base first, then variants).
5. Admin module: all `Admin ...`, `Analytics`, `Content`, `Create/Edit team allocations`, `Edit Users`, and announcement management screens.
