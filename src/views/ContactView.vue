
<template>
    <div class= "container-fluid">
        <div class="container-right">
            <div class="icons">
                <a href="">
                 img
                <h2>Address</h2>
            </div>
            <div class="icons">
                <a href="">
                 img
                <h2>Email</h2>
            </div>
            <div class="icons">
                <a href="">
                  img
                <h2>Call</h2>
            </div>
            <div class="icons">
                <a href="">
                    img
                <h2>WhatsApp</h2>
            </div>
        </div>

    <div class="container-right">
        <div class="contact-me">
            <h1>contact</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: ContactView
    }
</script>

<style lang="scss" scoped>

.container-fluid{
    display: flex,
    flex-direction: row,
    background-color: black
}

.container-right{
    background-color: brown,
    padding: 3%,
    width: 30%
}

.container-left{
    background-color: black,
    margin: 2.5%,
    width: 70%
}


.link a{
    text-decoration: none,
    color: black,
    font-size: 10px
}


.link img{
    height: 2rem 
}

.contact-me{
    text-align: left
}

.main-container{
    border-radius: 25px
}
</style>