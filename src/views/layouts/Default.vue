<template>
    <ul role="navigation">
        <li>
            <router-link to="/">Home</router-link>
        </li>

        <li>
            <router-link to="/about">About</router-link>
        </li>
    </ul>

    <main>
        <slot />
    </main>
</template>
