<a href="/register" {{ $attributes->merge(['type' => 'submit', 'class' => 'text-center rounded-full items-center px-4 py-2 border min-w-full text-center rounded-md font-semibold text-xs text-blue uppercase tracking-widest focus:ring-offset-2 transition ease-in-out duration-150']) }}>
    {{ $slot }}
</a>
