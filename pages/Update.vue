<template>
  <div>
    <h1>Обновления</h1>
    <div class="card__group">
      <div class="version">
        V 1.6
      </div>
      <div class="card">
        <h2>Что добавленно</h2>
        <ul>
          <li>Множественный выбор изображений</li>
          <li>пофикшены баиги  при множественном выборе изображений</li>
          
        </ul>
      </div>
      <div class="card">
        <h2>Что в планах добавить</h2>
        <ul>
          <li>Выбор нескольких фотограйи в закреп, их редактирование(удаление)</li>
          <li>Категории и поиск заметок</li>
        </ul>
      </div>
      <div class="card">
        <h2>Что неработает</h2>
        <ul>
          <li>обновление у удаление заметок</li>
          <li>Удаление фотографии из заметки</li>
          <li>Категории и поиск заметок</li>
        </ul>
      </div>
      
    </div>
    <div class="card__group">
      <div class="version">
        V 1.5
      </div>
      <div class="card">
        <h2>Что добавленно</h2>
        <ul>
          <li>Добавление замети</li>
          <li>Добавление фотографии в заметку</li>
          <li>Просмотр фотографии в заметке в большом окне</li>
        </ul>
      </div>
      <div class="card">
        <h2>Что в планах добавить</h2>
        <ul>
          <li>Выбор нескольких фотограйи в закреп</li>
          <li>Категории и поиск заметок</li>
        </ul>
      </div>
      <div class="card">
        <h2>Что неработает</h2>
        <ul>
          <li>обновление у удаление заметок</li>
          <li>Удаление фотографии из заметки</li>
          <li>Категории и поиск заметок</li>
        </ul>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.card__group {
  border-radius: 8px;
  margin-top: 3rem;
  background: #ebebeb;
  padding: 3rem;
}
.card {
  padding: 1rem;
  margin-bottom: 2rem;
  &:last-child {
    margin-bottom: 0;
  }
  h2 {
    font-size: 2.5rem;
    margin: .7rem 0;
  }
  ul {
    list-style: disc;
    font-size: 18px;
    line-height: 2;
  }
}
.version {
    font-size: 4rem;
    color: #ccc;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
</style>