--
-- Notification
--

INSERT INTO public.notification (id, created_at, updated_at, title, content, published_at) VALUES ('f7f540ad-0b88-4d0e-8488-41428788a7c2', '2021-05-15 17:38:24.587902+00', '2021-05-15 19:22:24.936853+00', 'Rejestracja!', 'Czekamy **od 12:00**. Bezpiecznej podróży i do zobaczenia na miejscu!', '2021-05-15 18:45:00+00') ON CONFLICT DO NOTHING;
INSERT INTO public.notification (id, created_at, updated_at, title, content, published_at) VALUES ('ea88ddbf-0a67-4d13-b7c1-c98ae8f8e757', '2021-05-15 17:37:49.953784+00', '2021-05-15 19:22:30.634141+00', 'Informacja testowa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2021-05-15 17:45:27.924+00') ON CONFLICT DO NOTHING;


--
-- Session
--

INSERT INTO public.session (id, created_at, updated_at, name, begins_at, ends_at, is_main_event) VALUES ('98642245-c153-470b-ac27-99c2572ce305', '2021-05-15 17:39:15.857429+00', '2021-05-15 17:39:15.857429+00', 'Rejestracja', '2021-07-12 10:00:00+00', NULL, TRUE) ON CONFLICT DO NOTHING;
INSERT INTO public.session (id, created_at, updated_at, name, begins_at, ends_at, is_main_event) VALUES ('1074b5de-7dd1-4426-ac7a-631a7c87e842', '2021-05-15 17:40:09.600233+00', '2021-05-15 17:40:09.600233+00', 'Sesja wieczorna', '2021-07-12 18:00:00+00', NULL, TRUE) ON CONFLICT DO NOTHING;
INSERT INTO public.session (id, created_at, updated_at, name, begins_at, ends_at, is_main_event) VALUES ('e7123c4b-89ba-46c9-aad7-00e19f1ae22a', '2021-05-15 17:40:33.483413+00', '2021-05-15 17:40:33.483413+00', 'Equip', '2021-07-13 10:00:00+00', NULL, TRUE) ON CONFLICT DO NOTHING;
INSERT INTO public.session (id, created_at, updated_at, name, begins_at, ends_at, is_main_event) VALUES ('4b3e3d79-4d25-4aef-bf27-22d77bba7051', '2021-05-15 17:42:50.61881+00', '2021-05-15 17:43:02.055457+00', 'Modlitwa', '2021-07-13 06:00:00+00', NULL, TRUE) ON CONFLICT DO NOTHING;
INSERT INTO public.session (id, created_at, updated_at, name, begins_at, ends_at, is_main_event) VALUES ('93aad1a4-c99a-4ba4-9c81-9288720dacd6', '2021-05-15 17:43:21.341904+00', '2021-05-15 17:43:21.341904+00', 'Strefa Chill & Be Active', '2021-07-13 11:30:00+00', NULL, TRUE) ON CONFLICT DO NOTHING;


--
-- Topic
--

INSERT INTO public.topic (id, created_at, updated_at, session_id, subject, description, location) VALUES ('adc2cf49-b9a1-451e-8931-de1aff1ce6a9', '2021-05-15 17:40:55.745325+00', '2021-05-15 17:40:55.745325+00', 'e7123c4b-89ba-46c9-aad7-00e19f1ae22a', 'Wolność od strachu i oceny.', 'Wolność od pułapki oczekiwań.', 'Łuczniczka') ON CONFLICT DO NOTHING;
INSERT INTO public.topic (id, created_at, updated_at, session_id, subject, description, location) VALUES ('d70a50a5-d392-4ea7-b838-a8c49bae9a37', '2021-05-15 17:41:18.931968+00', '2021-05-15 17:41:37.076536+00', 'e7123c4b-89ba-46c9-aad7-00e19f1ae22a', 'Wolność do bycia człowiekiem, który wnosi błogosławieństwo, a nie hejt.', NULL, 'Staff Room') ON CONFLICT DO NOTHING;
INSERT INTO public.topic (id, created_at, updated_at, session_id, subject, description, location) VALUES ('5e7f7b98-45be-456e-b76d-24efb060c467', '2021-05-15 17:42:10.079709+00', '2021-05-15 17:42:10.079709+00', 'e7123c4b-89ba-46c9-aad7-00e19f1ae22a', 'Wolność w relacjach. Czyste źródło.', 'Jak budować zdrowy związek, relację, małżeństwo?', 'Sala Główna') ON CONFLICT DO NOTHING;
