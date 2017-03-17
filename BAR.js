$( "#navBarText" ).hide();
$( ".blub-form-img" ).css('visibility','hidden');
$( ".blub-form-text" ).hide();

// function soulKarmaCalc () {
//   let month = $('#month').val();
//
// }

$("#name-bday-submit").submit(function(event) {
  event.preventDefault();
  let first = $('#first-name').val();
  let last =  $('#last-name').val();
  let month = $('#month').val();
  let day = $('#day').val();
  let year = $('#year').val();
  let name = first + '+' + last
  // let soulNum = $('#day').val(); //--> numbers added
  // let karmaNum =$('#month').val(); //--> numbers added
  let newURL = `http://affinity-numerology.com/api/NumerologyAPI.php?key=aaronop&format=json&timeoffset=-08:00&type=name,birthdate&name=` + name + '&year=' + year + '&month=' + month + '&day=' + day
  numAjax(newURL);
});

function numAjax(data) {
  $.ajax ({
    method: 'GET',
    url: 'https://galvanize-cors-proxy.herokuapp.com/' + data,
    success: function (data) {
      console.log(data);
      // let nameStr = data.namereading;
      // let birthStr = data.birthdatereading;
      //
      // function numExtract(str) {
      //   var numb = str.match(/\d/g);
      //
      //   return numb;
      // }

      // console.log(numExtract(nameStr));

      // Basic Append Code
      $('div.container-3').append( `<div class="row empty2">
      </div>
      <div class="row">
      <h3 class="readings">${data.name}</h3>
      </div>
      <div class="row">
      <h3 class="readings">${data.birthdatereading}</h3>
      </div>
      <div class="row">
      <h3 class="readings">${data.namereading}</h3>
      </div>
      <div class="row empty2">
      </div>
      <hr>`
      );
    },
    error: function (xhr, textStatus, errorMessage) {
      alert(errorMessage);
    }
  });
};


// Page down button
$('#page-down').click(function() {
  $('html, body').animate({scrollTop: document.body.scrollHeight},"slow");
  $( ".blub-form-img" ).css('visibility','visible ');
  $( ".blub-form-text" ).show( 700 );
});
// Page down with Next button
$('#name-bday-submit').click(function() {
  $('html, body').animate({scrollTop: document.body.scrollHeight},"slow");
});

// Nav Bar Buttons
$('#numerology').click(function() {
  $( "#navBarText" ).empty();
  $('#navBarText').append( `It’s the study of numbers and the mystical influence they have in your life! Here, we will look at the numbers that make up your birthdate and name.` );
  $( "#navBarText" ).show( 1000 );
});
$('#about').click(function() {
  $( "#navBarText" ).empty();
  $('#navBarText').append( `What is the truth? Who am I? Why? What is really real?... I don't know, but I can give you some places to start your inqueries using the powers of Numerology!` );
  $( "#navBarText" ).show( 1000 );
});
$('#aaron').click(function() {
  $( "#navBarText" ).empty();
  $('#navBarText').append( `He is an enlivening, confident leader, who's essence is grounded in natural fearlessness. His presence inspires awe and wonder into the whole of life.` );
  $( "#navBarText" ).show( 1000 );
});

// `${key}&format=${format}
// &type=${type}&timeoffset=${timeoffset}&name=${name}&year=${year}&month=${month}&day=${day}`
// `http://affinity-numerology.com/api/NumerologyAPI.php?key=${key}&format=${json}
// &type=${type}&timeoffset=${timeoffset}&name=${name}&year=${year}&month=${month}&day=${day}`



// 3ho readings
// var soulData = {
//   '1' : `You are the kind of person who, in your own internal relationship with yourself, creates a circular argument with your subconscious and gets stuck in it. When you find yourself under stress, your tendency is to deal with that internal stress from your head, not your heart. This is frustrating because you cannot get out of the stress through your mental processing. Logic will always carry you to a dead end. What is right in life, does not always make logical sense! You can't have internal peace unless you go beyond the mind into the heart. The heart is the sun, and the mind is the moon. All the moon's light is only a reflection of the light of the sun. The solution is to balance the energies of the head and the heart. If you connect yourself to your Soul you will experience your inner identity. Your inner essence is creativity. When you live in your higher consciousness, your creativity flows constantly through your heart center and infuses all your actions and relationships. The constant flow of spontaneous imagination, love and creativity is who you truly are.` ,
//
//   '2' : `You have a deep "Longing to Belong". This longing to connect, this feeling of wanting to merge with someone, can cause you to "give yourself" to people who may want to use you or exploit you for their own purposes. Your longing to connect can put your spirituality in danger. You must process your longing to the point of neutrality. Ask yourself, "What can I learn from this relationship or this situation?" Remember first that you are always connected to God, then evaluate the situation neutrally to see if there is anything which could affect your soul in a negative way. Make a "road map" in your mental process in such a way as to connect yourself consciously to your spiritual teacher. When you feel your connection to God, to your own Infinity, then your connection to people will not be that important. The solution is to learn how to be discriminating in your relationships in order to protect your own spirituality and your own Soul. When you connect yourself to your Soul, you will experience your own inner identity. Your inner essence is Devotion. Your identity as a person of higher consciousness is someone who "longs to belong" only to God. Your love of God, your devotion, is the expression of who you truly are.` ,
//
//   '3' : `When you are under stress, the part of you that fails you is your positivity and optimism. Let's say you have an argument with somebody. After you work through it, you will say to yourself, "You know, all this is happening because I am such a creep, I am just no good..." In other words, you have an inability to see yourself in a positive light when you are in stressful situations. The key phrase here is "half devil and half divine". That is, you experience yourself as an angel and a devil rolled into one. The solution is to see yourself as Divine, as being a part of God, instead of seeing yourself as being at fault and being responsible for everything that goes wrong. Your inner nature is flexible, happy and playful. When you connect yourself to your Soul, then you will become aware of your inner identity. Your essence is the playful, mischievous, constant flow of Joy, which is God's constant creativity in action. Your highest manifestation is as a sort of "Spiritual Mother or Father", someone who takes care of everyone and makes sure that everyone is fed and has everything which he or she needs.` ,
//
//   '4' : `You are very indecisive under stress. You say to yourself, "Well, I don't know; I'm not sure; let me think about it..." If you get your neutral mind to work for you then you will be absolutely decisive. You can know yourself so quickly that the accurate answer to any problem will come to you immediately. If the 4 in the soul position is working, then you are able to hear your own "inner voice" and you will be totally sure. The solution is to activate the Neutral Mind. The Neutral Mind is the essence of your own inner identity. If you connect yourself to your Soul, then you will experience your true nature. Your true nature is extremely detached and neutral. The key phrase here is "Cup of Prayer". It is your receptive nature that, like a cup, allows you to neutrally receive the negativity and positivity of others without reacting to it, and therefore to bless others with your own neutrality. If you live in your higher consciousness then everyone will love to just be near you so that they can feel the blessing of your presence.` ,
//
//   '5' : `The key word for you is balance. If your body is out of tune, you cannot reach a balance in your internal processes. When you are under stress, you have an inability to make sacrifices. This manifests in such a way that you can't push yourself out of your "comfort zone" in order to serve others or to serve your own soul. It is a problem of self-discipline versus self-indulgence. Your self-indulgence will take you on the path of self-destruction unless you go through a conscious clearing process for 1000 days so that you can gain the ability to sacrifice your own comfort and give up your anger. The solution is for you to accept the fact that you must teach others how to experience their own inner identity. If you connect yourself to your Soul, you will experience your own inner identity which is that of a teacher. It is through your self-sacrifice that the essence of who you are can be expressed in your life.` ,
//
//   '6' : `You have trouble keeping centered when you are under stress. The center is the Soul, the Conscious consciousness of your own Infinite identity. If your intuition is not working than you are not able to tune in to the deeper levels of your Self. You experience a state of confusion about what is going on, and therefore have a lack of confidence in yourself. The solution is to meditate every day and to strengthen your intuition. When you are in touch with your own Infinite Identity, then you will live in your essence. Your essence is to be a "Person at Prayer". This means that when you are in harmony with yourself your intuitive powers are very strong and that you will love to meditate on God and pray for others. Your essence is to be very strong, very centered, and very spiritual.` ,
//
//   '7' : `When you are under stress, you lose the ability to elevate yourself. You can't seem to get your spirit moving. You can't uplift your own internal processes so that life seems good and exciting to you. A symptom of this is that you hide out in your shell a lot, and don't like to come out and interact with other people. This is because you feel overwhelmed by other people and by your environments. You must work through this block so that you can connect to your Soul and allow the flow of Spirit to elevate you. The solution is to meditate each day so that the constant flow of uplifting Soul energy can be released. When you connect yourself to your Soul and live in the Conscious consciousness of your own Infinite Identity, then you will experience your essence. Your essence is to be a "spiritual forklift". That is, you will have the ability to elevate and uplift yourself as well as others. The key phrase to describe your Soul identity is "Platform of Levitation".` ,
//
//   '8' : `Your main internal blockage is fear. It is said "Spiritual people should be happy", but you say to yourself, "Oh... I can't be happy because...(insert current fear-oriented excuse here!). Your fear keeps you from seeing the joy and happiness in your life. The solution is for you to work on your eighth body and so become totally fearless in dealing with anything that life sends your way. Once you experience that you and God are one and the same, all fear departs. If you connect yourself to your Soul, you will experience your Infinite Identity. Your highest identity lies in experiencing the Infinity within each finite thing, and sharing that experience with others. Your creative essence is to be a healer.` ,
//
//   '9' : `In your own relationship with yourself and your Soul, you are very hard on yourself. You feel unhappy because "Without mastery, life appears as a mystery". This is sort of a "spiritual naivetÈ" in which you take people at face value and lack the subtle perception to pick up the subtler levels of where people are really coming from. You must develop your subtle levels of awareness. This is the artist in you. You tend to be crude and hard on yourself, and therefore you must develop your kindness towards yourself. You have a tendency to give up things after a short period of time instead of sticking with them and mastering them, but your joy in life will come from mastering things. The solution is to meditate for 1000 days and activate your subtle levels of awareness. Your Self-identity in Higher Consciousness, your essence, is to be absolutely unshakable, calm, and solid. No one should be able to disturb your inner peace. You are, in essence, a lake of calmness from which many people can drink deeply of the waters of inner peace.` ,
//
//   '10' : `As soon as you are under stress, you have an internal attitude of
//   "I can't do it...I just don't have the energy...Oh God, I'm just not able to..." etc.
//   The world for you seems to be a big Zero! You just can't seem to make things happen. This feeling of total weakness and an absolute inability to do anything, alternates with periods where you feel that you can do absolutely anything at all! It is a situation where you feel that you are either "All or Nothing". The solution is to meditate, to connect with your Soul, and to develop the attitude of, "I'm going to give it my 150%, no matter what!". The essence of your own inner identity is Total Radiance. Who you are, in the highest and deepest essence of your own creativity, is a majestic and royal king or queen; totally courageous and absolutely radiant.` ,
//
//   '11' : `You have a great internal conflict because you want to be the complete master of yourself, and you can't see how to do it. The only way you can become a master is to surrender to God, let God run your life, and know that God is the ONLY master. If you relate to and experience the inner wisdom within your own consciousness, you will know that you represent the Infinity incarnate and you will be the master of your physical universe and nothing will be able to bug you or bother you in any way! The solution is to relate to the infinite teacher within yourself, and to surrender to that flow of inner wisdom. In your highest and deepest consciousness, you are a Universal person. That is, the true essence of who you are is someone who can express yourself through all the ten spiritual bodies in all situations of life and in relation to all people.` ,
// }
//
// var karmaData = {
//   '1' : `You have the habit to relate to people from the head instead of the heart. In order to be happy in the external realms of life you must not only come from your heart center, but everyone you deal with must KNOW that you are coming from your heart. This is absolutely crucial for you if you ever want to have harmony in your external world. The solution is to balance the head and the heart so that you feel in harmony with all your external dealings.` ,
//
//   '2' : `In order for you to feel that your external world is going right, your negative mind must work properly. The negative mind is the part of your mind that warns you of possible danger. Karmically, you are very susceptible to try to connect with everyone. You try to connect to people no matter what. In order to develop your own caliber and quality, you need the company of people of elevated consciousness, positive people who can uplift you and inspire you. If your negative mind works properly then you are able to calculate the danger in any relationship and so become aware of which relationships are beneficial to your Soul, your Infinite Self, and which are not. You sometimes do things in order to make a friend, or to make someone like you. This leaves you open to be easily taken advantage of by others. The solution is to activate the negative mind so that you will be able to calculate the danger in any situation, and so avoid forming associations with people who do not inspire you and lead you to your full potential.` ,
//
//   '3' : `Your test is to be positive in terms of external relationships. When you are under stress, in negative environments (such as in the business world), you feel that you can't handle things because your mind is always focusing on the negative. You are stuck in the negative mind and can only see the potential problems and dangers in a situation, and not the positive aspects. The solution is to activate the positive mind so that you can become able to see the "light at the end of the tunnel". You need to see the harmony and good in situations and to focus on the positive and solutional aspects of your relationships.` ,
//
//   '4' : `In your relationship to the external world, your relationships with other people and with your environments, you have an inability to be neutral. You seem to have an opinion or comment about everything. You are extremely opinionated and you love to argue. Whether you are right or wrong, or whether it has been proven right or wrong; it doesn't matter to you. You just have to comment on everything! Your test in life is to learn how to become neutral, to listen, to evaluate, and to act consciously; not to react to everyone and everything. The solution is to activate the neutral mind so that you can gain the ability to listen quietly and make neutral decisions about the processes in which you are involved.` ,
//
//   '5' : `You have a strong tendency to be self-indulgent. There is a lack of control over your physical environments and your physical body. This can easily lead to becoming lazy, out of shape, or overweight. Your test in life is to become less self-interested and self-motivated, and so become more able to open yourself to make sacrifices for others. The solution is to gain the willpower to make sacrifices, and so become able to make things happen in your relationships.` ,
//
//   '6' : `Your test in life is to live to your word in all your business and personal relationships. You often say things, and then aren't able to live up to them. Your word lacks power. You are unable to be constant or consistent, to follow things through with concentration and commitment. The solution is to master your mind and so become one-pointed and gain the ability to be consistent.` ,
//
//   '7' : `You feel overwhelmed by the external world. You may walk into a group of people with a speech completely prepared, and then be unable to speak at all. There is so much input coming in that it tends to totally confuse your mind. This tends to undermine your confidence in yourself. The solution is to strengthen your projection so that you can walk into any situation or environment and feel totally centered and confident, no matter how much confusion or negativity may be present. With a strong projection, no negativity can affect you. You will not only feel elevated yourself, but you will be able to elevate all those around you and uplift any situation.` ,
//
//   '8' : `You have a lot of fear. No matter what you get into, there never seems to be enough energy to do it. You often feel tired. You can't seem to see the Infinite aspects of a situation and to know that you can do better. Your test is to become able to see the Infinity in every situation of life. The solution is to master the pranic body and so become extremely energetic and projective. Mastery of the pranic body will give you tremendous energy, and the ability to be an effective "long-range planner"; i.e. to see the steps that you have to take to make it from where you are to where you want to be, and to follow through with plans and goals.` ,
//
//   '9' : `You lack the ability to be subtle in your external relationships, and have a tendency to communicate on a somewhat blunt and crude level lacking in gentleness and flowing grace. While you may see the negative sides of situations, you blur them out. You tend to take people at face value with a certain innocent naivetÈ. This lack of insight into other people's underlying motivations makes you gullible and can get you into trouble. Your test in this life is to learn how to stick with things and master them. The solution is to pick something that works for you and stick with it! Mastery of subtle perception and the accompanying insight and awareness which that brings, are necessary for you to experience your own depth and dimension. Whatever you do, live it, breathe it and become a master at it! A master understands the subtlety of his art.` ,
//
//   '10' : `In your relationship to your environments and to others you are either "All or Nothing". You are either a total zero, or you are 150%! There is nothing in between. You tend to be weak in your relationships and business dealings. Your test in this life is to experience and manifest your own radiance in all your work, relationships and involvements and to put your 150% into everything you do. The solution is to master your Royal projection and live a life of Royal Courage.` ,
//
//   '11' : `A Karma of 11 means that your Karma is set. All you have to do is just keep up and go through it gracefully. You feel that you have no mastery of the physical realm, and so you tend to worry about money, your physical looks, and things like that. You want the prettiest car and the prettiest clothes and tend to be quite concerned about how others see you. Your test in this life is to master the physical realm and experience your own perfection. If you leave your neurotic self-identity, and establish your Infinite identity, then you will KNOW your own Divinity and Royalty, and so you will drive the prettiest car and wear the prettiest clothes not because of what others think of you, but because you have the highest opinion of YOURSELF. The solution is to remember the Infinity in the midst of all life situations.` ,
// },
