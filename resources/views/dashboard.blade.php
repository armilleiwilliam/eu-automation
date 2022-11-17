<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Weather forecast dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12 container-grid">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 h-50" style="min-height: 500px;">
                    <div id="app"></div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
