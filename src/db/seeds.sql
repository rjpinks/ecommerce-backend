# Seeds Product
SELECT id, book_name, author_last, description, isbn, genre, price_in_cents, created_at, modified_at FROM product;
INSERT INTO product (book_name, author_last, img_url, description, isbn, genre, price_in_cents, created_at, modified_at)
VALUES
    ('The Great Gatsby', 'Fitzgerald', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg', 'A classic novel depicting the roaring twenties', '9780743273565', 'Classics', 999, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('To Kill a Mockingbird', 'Lee', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/800px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg', 'A masterpiece of American literature', '9780061120084', 'Classics', 899, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('1984', 'Orwell', 'https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg', 'A dystopian novel set in a totalitarian regime', '9780451524935', 'Fiction', 799, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('Brave New World', 'Huxley', 'https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg', 'A dystopian novel that was inspired by H. G. Wells. People are no longer born, but they mature in artificial wombs, and a caste system is placed upon the people', '9780582060166', 'Science-Fiction', 699, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('Hatchet', 'Paulsen', 'https://upload.wikimedia.org/wikipedia/en/3/30/Hatchet_%28Paulsen_novel_-_cover_art%29.jpg', 'A teenager is the sole survivor of a airplane crash. He must struggle alone in the woods with only a hatchet by his side.', '9780140327243', 'Young Adult', 499, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('Dune', 'Herbert', 'https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg', 'A young man travels to a foreign planet, which controls the flow of spice. His father is killed, and he is thrown into a world of intrigue and deceit.', '9780425027066', 'Science-Fiction', 899, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('The Stranger', 'Camus', 'https://upload.wikimedia.org/wikipedia/commons/9/97/L%27%C3%89tranger_-_Albert_Camus.jpg', 'A French man living in Algeria during the revolution is put in this classic damned-if-you-do-damned-if-you-dont scenario', '9780679720201', 'Philosophy', 399, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('La Moustache', 'Carrere', 'https://m.media-amazon.com/images/I/71nkBuYsNYL._AC_UF1000,1000_QL80_.jpg', 'One day, a man decides to shave his moustache. This leads to a wild road that leaves the protagonist questioning himself at every turn along the way.', '9782867440571', 'Mystery', 999, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('Fille', 'Laurens', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1613315462i/52860975.jpg', 'This novel tells the tale of all girls. It is a piece of feminist literature that speaks about the cyclic nature of abuse that is supported by the patriarchy.', '9782072734007', 'Fiction', 1099, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('Lord of the Flies', 'Golding', 'https://upload.wikimedia.org/wikipedia/en/9/9b/LordOfTheFliesBookCover.jpg', 'A group of middle school boys are stranded on an island. The novel tackles themes regarding the true character of human nature', '9781573226127', 'Young Adult', 499, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('The Most Dangerous Game', 'Connell', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Colliers11924.png/330px-Colliers11924.png', 'A man gets stranded on an island, but there is a former Russian aristocrat also living on the island. Is he actually lucky to have found him though?', '9780772501011', 'Short Story', 199, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('VALIS', 'Dick', 'https://upload.wikimedia.org/wikipedia/en/1/1c/VALIS%281stEd%29.jpg', 'An autobiography of one of the greatest science fiction authors ever born. He also suffered from schizophrenia, and it gives interesting insight into the neurodivergent mind', '9780547572413', 'Autobiography', 499, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('The Only Good Indians', 'Jones', 'https://upload.wikimedia.org/wikipedia/en/f/f4/The_Only_Good_Indians.jpg', 'In this gripping tale from Native American author Stephen Graham Jones, three Native American men deal with the actions that echo across decades.', '9781789095296', 'Horror', 799, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('Misery', 'King', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Misery_%281987%29_front_cover%2C_first_edition.jpg/800px-Misery_%281987%29_front_cover%2C_first_edition.jpg', 'A famous author is a victim of a car crash in the middle of winter. He is rescued by a super fan that keeps him at her house while he heals; however, his host might not have his best intentions in mind', '9780340951439', 'Horror', 399, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('The Call of Cthulhu and Other Weird Stories', 'Lovecraft', 'https://images4.penguinrandomhouse.com/cover/9780143129455', 'Dive into the world of cosmic horror from the imaginative mind of H.P. Lovecraft. Experience his timeless tale of Cthulu and much more--such as early 1900s xenophobia.', '9786050959512', 'Horror', 1199, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('The Tell-Tale Heart', 'Poe', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1534247939i/899492.jpg', 'A man confronts himself and an unknown listener about how he wants to kill an old man', '9780141397269', 'Horror', 299, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('Zorba the Greek', 'Kazantzakis', 'https://upload.wikimedia.org/wikipedia/en/b/b4/Zorba_book.jpg', 'A book that discusses the relations between people, but also after a recently fragmented Ottoman Empire', '9780571052653', 'Philosophy', 799, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('Heart of Darkness', 'Conrad', 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Blackwood%27s_Magazine_-_1899_cover.jpg', 'A man travels down a river looking for an ivory trader in Africa. He witnesses the horrors of man', '9780312114916', 'Thriller', 599, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('Odyssey', 'Homer', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Odyssey-crop.jpg/800px-Odyssey-crop.jpg', 'The classic Ancient Greek tale of a man returning home from the Trojan War.', '9780312869014', 'Adventure', 199, '2024-03-20 00:00:00', '2024-03-20 00:00:00'),
    ('The Bad Seed', 'March', 'https://upload.wikimedia.org/wikipedia/en/5/57/Badseed.PNG', 'An innocent looking girl is in the middle of several tragic accidents.', '9781443187596', 'Thriller', 699, '2024-03-20 00:00:00', '2024-03-20 00:00:00');


# Seeds UserAddress
INSERT INTO useraddress (address_line1, address_line2, city, postal_code, country, telephone)
VALUES
    ('123 Washington Rd.', 'apt 2F', 'Wahiawa', 92381, 'USA', 5558675309),
    ('123 Washington Rd.', 'apt 2F', 'Wahiawa', 92381, 'USA', 5558675309),
    ('1202 Parkview Rd.', null, 'Detroit', 12345, 'USA', 1235557657);


# Seeds UserPayment
INSERT INTO userpayment (payment_type, payment_provider, account_number, expiration, created_at)
VALUES
    ('credit card', 'visa', 1111222233334444, '12/24', '2024-03-20 00:00:00'),
    ('debit card', 'mastercard', 2222111133334444, '01/25','2024-03-20 00:00:00'),
    ('debit card', 'american express', 4444333322221111, '03/27', '2024-03-20 00:00:00');


# Seeds UserProfile
INSERT INTO userprofile (email, password, first_name, last_name, created_at, address_id, user_payment_id)
VALUES
    ('book_lover1@email.com', 'booksAreCool', 'John', 'Doe', '2024-03-20 00:00:00', 1, 1),
    ('the_lake_and_river@email.com', 'booksAreCool', 'Jane', 'Doe', '2024-03-20 00:00:00', 2, 2),
    ('taco_fan_the_man@email.com', 'booksAreCool', 'Raindrop', 'Pinkston', '2024-03-20 00:00:00', 3, 3);
