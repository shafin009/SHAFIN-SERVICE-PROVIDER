import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="card text-center">
                <div class="card-header">
                    Question-1. What is the difference between Authorization and Authentication ?
                </div>
                <div class="card-body">

                    <p class="card-text">Authentication হলো কাউকে কোনো কিছু, কারো কোনো act প্রকৃতপক্ষে তা সত্য কিনা নির্ণয় করার প্রক্রিয়া। Authorization হলো কাউকে কোনো কাজ করার জন্য বা কোনো resource ব্যবহার করতে Permission দেবার প্রক্রিয়া। Authentication ব্যবহারকারী কে- তা যাচাই করে। Authorization নির্ধারণ করে কোনো user কোনো Resource-এ access করতে পারবে কিনা। Authentication Access ব্যবস্থাপনা প্রক্রিয়ার প্রথম ধাপ আর Authorization সর্বদা Authentication-এর পরেই চালিত হয়।</p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-header">
                    Question-2. Why are you using Firebase ? What other options do you have to implement Authentication ?
                </div>
                <div class="card-body">

                    <p class="card-text">Firebase আপনার Mobile Apps , Web Apps অ্যাপস ইত্যাদির জন্য Server-less Back end হিসেবে কাজ পারে। এটি স্বয়ং Google দ্বারা নিয়ন্ত্রিত একটি Provider। একজন Web  Developer হিসেবে আমি আমার বেশিরভাগ Project-এ Firebase ব্যবহার করি। Firebase-এর অনেক Features আছে। এটি ব্যবহারে সহজ বলে আমাদের সময় ও শ্রম খুব কম হয়। স্বয়ং Google আপনার Data-এর যত্ন নেয় বলে আপনার Data গুলোও সুরক্ষিত থাকে। Here are some Name of Authenticartion implement option--
                        1.Parse.

                        2.Back4app.

                        3.Kinvey.

                        4.Backendless.

                        5.Kuzzle.

                        6.Pubnub.

                        7.Kumulos.

                        8.Game Sparks.

                        9.Hoodie.

                        10.Appwrite.
                    </p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-header">
                    Question-3.What other services does Firebase provide other than Authentication ?
                </div>
                <div class="card-body">

                    <p class="card-text">There are many services which Firebase provides, Most useful of them are:
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions for Firebase</li>
                        <li>Cloud Storage for Firebase</li>
                        <li>Firebase Cloud Messaging</li>
                        <li>Firebase Crashlytics</li>
                        <li>Firebase In-App Messaging</li>
                        <li>Firebase Platform</li>
                        <li>Firebase Predictions</li>
                        <li>Firebase Realtime Database</li>
                        <li>Firebase Remote Config</li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;